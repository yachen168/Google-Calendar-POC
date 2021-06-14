import React from "react";

const authenticate = async () => {
  try {
    await window.gapi.auth2.getAuthInstance().signIn({
      scope:
        "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/calendar.readonly",
    });

    await loadClient();
    console.log("Sign-in successful");
  } catch (error) {
    console.error("Error signing in", error);
  }
};

const loadClient = async () => {
  window.gapi.client.setApiKey("AIzaSyAypjoSUTT6R3ri2yqA4jt-EUEpIw9weyw");

  try {
    await window.gapi.client.load(
      "https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    );
    console.log("GAPI client loaded for API");
  } catch (error) {
    console.error("Error loading GAPI client for API", error);
  }
};

const SignInButton = () => {
  return <button onClick={authenticate}>Sign In</button>;
};

export default SignInButton;
