import List "mo:core/List";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Contact form types and storage
  public type ContactFormSubmission = {
    name : Text;
    company : ?Text;
    emailOrPhone : Text;
    inquiryTopic : Text;
    message : Text;
  };

  var submissions = List.empty<ContactFormSubmission>();

  // User profile types and storage
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // Public contact form submission - accessible to everyone including guests
  public shared ({ caller }) func submitContactForm(submission : ContactFormSubmission) : async () {
    // Validate required fields
    if (submission.name.size() == 0 or submission.emailOrPhone.size() == 0 or submission.inquiryTopic.size() == 0 or submission.message.size() == 0) {
      Runtime.trap("All fields except company are required.");
    };
    submissions.add(submission);
  };

  // Admin-only function to view all submissions
  public query ({ caller }) func getAllSubmissions() : async [ContactFormSubmission] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view submissions");
    };
    submissions.toArray();
  };

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
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
