import Map "mo:core/Map";
import Principal "mo:core/Principal";
import List "mo:core/List";

module {
  type OldActor = {
    submissions : List.List<ContactFormSubmission>;
    userProfiles : Map.Map<Principal, UserProfile>;
  };

  type ContactFormSubmission = {
    name : Text;
    company : ?Text;
    emailOrPhone : Text;
    inquiryTopic : Text;
    message : Text;
  };

  type UserProfile = {
    name : Text;
  };

  type NewActor = {};

  public func run(_old : OldActor) : NewActor {
    {};
  };
};
