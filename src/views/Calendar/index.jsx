import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CustomCalendar from "../../components/CustomCalendar";
import history from "../../history";
import { addEventToCalendar, getUserCalendar } from "../../actions/calendar";

const EVENT = {
  summary: "new event!!!!!!",
  location: "800 Howard St., San Francisco, CA 94103",
  description: "A chance to hear more about Google's developer products.",
  start: {
    dateTime: "2021-07-18T17:00:00-07:00",
    timeZone: "Asia/Taipei",
  },
  end: {
    dateTime: "2021-07-18T19:00:00-07:00",
    timeZone: "Asia/Taipei",
  },
  recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
  attendees: [{ email: "lpage@example.com" }, { email: "sbrin@example.com" }],
  reminders: {
    useDefault: false,
    overrides: [
      { method: "email", minutes: 24 * 60 },
      { method: "popup", minutes: 10 },
    ],
  },
};

const Calendar = () => {
  const dispatch = useDispatch();

  const addEvent = () => {
    const request = window.gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: EVENT,
    });

    request.execute(function (event) {
      console.log(event);
      dispatch(addEventToCalendar(event.result));
      console.log("Event created: " + event.htmlLink);
    });
  };

  const updateEvent = () => {
    const request = window.gapi.client.calendar.events.update({
      calendarId: "primary",
      eventId: "didihvmlh3t10bbn82mpjgoal0_20210712T000000Z",
      resource: {
        summary: "revrevrevrevr",
        start: {
          dateTime: "2021-07-16T17:00:00-07:00",
          timeZone: "Asia/Taipei",
        },
        end: {
          dateTime: "2021-07-16T19:00:00-07:00",
          timeZone: "Asia/Taipei",
        },
      },
    });

    request.execute(function (event) {
      console.log(event);
      // dispatch(addEventToCalendar(event.result));
      console.log("Event created: " + event.htmlLink);
    });
  };

  const deleteEvent = () => {
    const request = window.gapi.client.calendar.events.delete({
      calendarId: "primary",
      eventId: "didihvmlh3t10bbn82mpjgoal0_20210712T000000Z",
    });

    request.execute(function (event) {
      console.log(event);
      // dispatch(addEventToCalendar(event.result));
      console.log("Event created: " + event.htmlLink);
    });
  };

  return (
    <div>
      <CustomCalendar />
      <button onClick={addEvent}>新增 event</button>
      <button onClick={updateEvent}>更新 event</button>
      <button onClick={deleteEvent}>刪除 event</button>
    </div>
  );
};

export default Calendar;
