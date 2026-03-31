import Map "mo:core/Map";
import Principal "mo:core/Principal";
import List "mo:core/List";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";



actor {
  // Initialize the access control system state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile type
  public type UserProfile = {
    name : Text;
  };

  // Inquiry status type
  public type InquiryStatus = {
    #open;
    #closed;
    #pending;
  };

  // Inquiry type
  public type Inquiry = {
    id : Nat;
    createdAt : Int;
    name : Text;
    company : ?Text;
    emailOrPhone : Text;
    inquiryTopic : Text;
    message : Text;
    status : InquiryStatus;
    seenByAdmin : Bool;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();
  let inquiries = Map.empty<Nat, Inquiry>();
  var currentInquiryId = 0;

  // Create inquiry (anonymous, public - no authentication required)
  public shared ({ caller }) func createInquiry(name : Text, company : ?Text, emailOrPhone : Text, inquiryTopic : Text, message : Text) : async ?Nat {
    let id = currentInquiryId;
    let newInquiry : Inquiry = {
      id;
      createdAt = Time.now();
      name;
      company;
      emailOrPhone;
      inquiryTopic;
      message;
      status = #open;
      seenByAdmin = false;
    };
    inquiries.add(id, newInquiry);
    currentInquiryId += 1;
    ?id;
  };

  // Mark inquiry as seen (admin only)
  public shared ({ caller }) func markInquiryAsSeen(id : Nat) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can mark inquiries as seen");
    };
    switch (inquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) {
        let updatedInquiry = { inquiry with seenByAdmin = true };
        inquiries.add(id, updatedInquiry);
      };
    };
  };

  // Delete inquiry (admin only)
  public shared ({ caller }) func deleteInquiry(id : Nat) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete inquiries");
    };
    if (not inquiries.containsKey(id)) {
      Runtime.trap("Inquiry not found");
    };
    inquiries.remove(id);
  };

  // List inquiries (admin only, paginated)
  public query ({ caller }) func listInquiries(offset : Nat, limit : Nat) : async [Inquiry] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can list inquiries");
    };

    let filteredInquiries = List.empty<Inquiry>();
    for ((_, inquiry) in inquiries.entries()) {
      filteredInquiries.add(inquiry);
    };

    let filteredInquiriesArray = filteredInquiries.reverse().toArray();
    let start = Nat.min(offset, filteredInquiriesArray.size());
    let end = Nat.min(offset + limit, filteredInquiriesArray.size());
    filteredInquiriesArray.sliceToArray(start, end);
  };

  // Get specific inquiry (admin only)
  public query ({ caller }) func getInquiry(id : Nat) : async ?Inquiry {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view inquiries");
    };
    inquiries.get(id);
  };

  // Update inquiry status (admin only)
  public shared ({ caller }) func updateInquiryStatus(id : Nat, status : InquiryStatus) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update inquiry status");
    };
    switch (inquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) {
        let updatedInquiry = { inquiry with status };
        inquiries.add(id, updatedInquiry);
      };
    };
  };

  // User profile functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };
};
