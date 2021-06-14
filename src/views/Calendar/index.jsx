import React, { useState } from "react";

const Calendar = () => {
  const [calendarData, setCalendarData] = useState(null);

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
      console.log("Response", response);
      setCalendarData(() => JSON.stringify(response.result));
    } catch (error) {
      console.error("Execute error", error);
    }
  };

  return (
    <div>
      <button onClick={execute}>Get Calender</button>
      <div>{calendarData ? calendarData : null}</div>
    </div>
  );
};

export default Calendar;