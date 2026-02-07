import Map "mo:core/Map";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control system state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  
  // Define user profile type
  public type UserProfile = {
      name : Text;
      // Other user metadata can be added here
  };

  // Storage for user profiles
  let userProfiles = Map.empty<Principal, UserProfile>();

  // Get the caller's own profile
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
      if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
          return null;
      };
      userProfiles.get(caller);
  };

  // Get any user's profile (own profile or admin viewing others)
  public query ({ caller }) func getUserProfile(user: Principal) : async ?UserProfile {
      if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
          return null;
      };
      userProfiles.get(user);
  };

  // Save the caller's own profile
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
      if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
          return;
      };
      userProfiles.add(caller, profile);
  };
};
