import React from "react";
import history from "../../history";

const API_KEY = "AIzaSyAypjoSUTT6R3ri2yqA4jt-EUEpIw9weyw";
const SCOPE =
  "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/calendar.readonly";
const CLIENT_ID =
  "663521848786-kg6cjje1o3dkg3h66547eaaf44qat5a6.apps.googleusercontent.com";

window.gapi.load("client:auth2", () => {
  window.gapi.auth2.init({
    client_id: CLIENT_ID,
    scope: "email",
  });
});

const authenticate = async () => {
  try {
    await window.gapi.auth2.getAuthInstance().signIn({
      scope: SCOPE,
    });

    await loadClient();
    history.push("/calendar");
    console.log("Sign-in successful");
  } catch (error) {
    console.error("Error signing in", error);
  }
};

const loadClient = async () => {
  window.gapi.client.setApiKey(API_KEY);

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
