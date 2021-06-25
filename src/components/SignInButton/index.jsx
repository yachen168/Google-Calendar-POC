import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import history from "../../history";
import { signIn, signOut, setIsSignIn } from "../../actions/auth";
import { getUserCalendar } from "../../actions/calendar";
import Calendar from "../../views/Calendar";

const API_KEY = "AIzaSyAypjoSUTT6R3ri2yqA4jt-EUEpIw9weyw";
const SCOPE =
  "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/calendar.readonly";
const CLIENT_ID =
  "663521848786-kg6cjje1o3dkg3h66547eaaf44qat5a6.apps.googleusercontent.com";

const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];

const SignInButton = () => {
  const dispatch = useDispatch();
  const { isSignedIn } = useSelector((state) => state.auth);

  function handleClientLoad() {
    window.gapi.load("client:auth2", initClient);
  }

  function initClient() {
    window.gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPE,
      })
      .then(
        function () {
          // Listen for sign-in state changes.
          window.gapi.auth2
            .getAuthInstance()
            .isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(
            window.gapi.auth2.getAuthInstance().isSignedIn.get()
          );
        },
        function (error) {
          console.log(JSON.stringify(error, null, 2));
        }
      );
  }

  function updateSigninStatus(isSignedIn) {
    console.log("updateSigninStatus", isSignedIn);
    dispatch(setIsSignIn(isSignedIn));
    if (isSignedIn) {
      listUpcomingEvents();
    }
  }

  function listUpcomingEvents() {
    window.gapi.client.calendar.events
      .list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        orderBy: "startTime",
      })
      .then(function (response) {
        const events = response.result;
        dispatch(getUserCalendar(events));
        console.log("Upcoming events:", events);
      });
  }

  const handleSignIn = (event) => {
    window.gapi.auth2.getAuthInstance().signIn();
    setIsSignIn(true);
  };

  /**
   *  Sign out the user upon button click.
   */
  const handleSignOut = (event) => {
    window.gapi.auth2.getAuthInstance().signOut();
    setIsSignIn(false);
  };

  useEffect(() => {
    handleClientLoad();
  }, []);

  return (
    <div>
      {isSignedIn ? (
        <button onClick={handleSignOut}>登出</button>
      ) : (
        <button onClick={handleSignIn}>登入</button>
      )}
      {isSignedIn ? <Calendar /> : null}
    </div>
  );
};

export default SignInButton;
