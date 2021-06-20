import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { useDispatch, useSelector } from "react-redux";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

let formats = {
  timeGutterFormat: "HH:mm",
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CustomCalendar = () => {
  const { calendar } = useSelector((state) => state);

  return (
    <Calendar
      localizer={localizer}
      step={60}
      formats={formats}
      events={calendar.events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 600 }}
      onSelectEvent={(e) => console.log(e)}
      // popup={true}
      showMultiDayTimes={true}
      selectable="ignoreEvents"
      onSelectSlot={(slotInfo) => console.log(slotInfo, "1234")}
    />
  );
};

export default CustomCalendar;
