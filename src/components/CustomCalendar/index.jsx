import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CustomCalendar = () => (
  <Calendar
    localizer={localizer}
    step={60}
    events={events}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 500 }}
  />
);

export default CustomCalendar;
