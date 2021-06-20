import { format } from "date-fns";
export default [
  {
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 1),
  },
  {
    title: "Long Event",
    start: new Date(2021, 4, 7),
    end: new Date(2021, 4, 10),
  },

  {
    title: "DTS STARTS",
    start: new Date(2021, 3, 13, 0, 0, 0),
    end: new Date(2021, 3, 20, 0, 0, 0),
  },

  {
    title: "DTS ENDS",
    start: new Date(2021, 10, 6, 0, 0, 0),
    end: new Date(2021, 10, 13, 0, 0, 0),
  },

  {
    title: "Some Event",
    start: new Date(2021, 5, 9, 21, 0, 0),
    end: new Date(2021, 5, 10, 2, 50, 0),
  },
  {
    title: "Some Event",
    start: new Date(2021, 5, 9, 21, 0, 0),
    end: new Date(2021, 5, 10, 2, 50, 0),
  },
  {
    title: "Some Event",
    start: new Date(2021, 5, 9, 21, 0, 0),
    end: new Date(2021, 5, 10, 1, 50, 0),
  },
  {
    title: "Conference",
    start: new Date(2021, 5, 11),
    end: new Date(2021, 5, 13),
    desc: "Big conference for important people",
  },
  {
    title: "Meeting",
    start: new Date(2021, 5, 12, 10, 30, 0, 0),
    end: new Date(2021, 5, 12, 12, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting",
  },
  {
    title: "Lunch",
    start: new Date(2021, 6, 12, 12, 0, 0, 0),
    end: new Date(2021, 6, 12, 13, 0, 0, 0),
    desc: "Power lunch",
  },
  {
    title: "Meeting",
    start: new Date(2021, 4, 12, 23, 0, 0, 0),
    end: new Date(2021, 4, 12, 24, 0, 0, 0),
  },
  {
    title: "Happy Hour",
    start: new Date(2021, 3, 12, 17, 0, 0, 0),
    end: new Date(2021, 3, 12, 17, 30, 0, 0),
    desc: "Most important meal of the day",
  },
  {
    title: "Dinner",
    start: new Date(2021, 3, 12, 20, 0, 0, 0),
    end: new Date(2021, 3, 12, 21, 0, 0, 0),
  },
  {
    title: "Birthday Party",
    start: new Date(2021, 3, 13, 7, 0, 0),
    end: new Date(2021, 3, 13, 10, 30, 0),
  },
  {
    title: "Birthday Party 2",
    start: new Date(2021, 3, 13, 7, 0, 0),
    end: new Date(2021, 3, 13, 10, 30, 0),
  },
  {
    title: "Birthday Party 3",
    start: new Date(2021, 8, 13, 7, 0, 0),
    end: new Date(2021, 8, 13, 10, 30, 0),
  },
  {
    title: "Late Night Event",
    start: new Date(2021, 9, 17, 19, 30, 0),
    end: new Date(2021, 9, 18, 2, 0, 0),
  },
  {
    title: "Multi-day Event",
    start: new Date(2021, 3, 20, 19, 30, 0),
    end: new Date(2021, 3, 22, 2, 0, 0),
  },
];
