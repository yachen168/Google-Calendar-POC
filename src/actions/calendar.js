import { GET_USER_CALENDAR } from "./actionTypes";

export const getUserCalendar = (data) => {
  return { type: GET_USER_CALENDAR, payload: data };
};
