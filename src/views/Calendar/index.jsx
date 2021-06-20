import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CustomCalendar from "../../components/CustomCalendar";
import history from "../../history";
import { getUserCalendar } from "../../actions/calendar";

const Calendar = () => {
  const [calendarData, setCalendarData] = useState(null);
  const dispatch = useDispatch();
  // Make sure the client is loaded and sign-in is complete before calling this method.
  const execute = async () => {
    try {
      const response = await window.gapi.client.calendar.events.list({
        calendarId: "primary",
        showDeleted: false,
        singleEvents: true,
        orderBy: "startTime",
      });
      // Handle the results here (response.result has the parsed body).
      setCalendarData(() => JSON.stringify(response.result));
      dispatch(getUserCalendar(response.result));
    } catch (error) {
      history.push("/");
      console.error("Execute error", error);
    }
  };

  return (
    <div>
      <button onClick={execute}>Get Calender</button>
      <CustomCalendar />
      <div>{calendarData ? calendarData : null}</div>
    </div>
  );
};

export default Calendar;
