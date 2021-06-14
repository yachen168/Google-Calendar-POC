import { GET_USER_CALENDAR } from "../actions/actionTypes";

/* initial state
{
    "kind": "calendar#events",
    "etag": etag,
    "summary": string,
    "description": string,
    "updated": datetime,
    "timeZone": string,
    "accessRole": string,
    "defaultReminders": [
      {
        "method": string,
        "minutes": integer
      }
    ],
    "nextPageToken": string,
    "nextSyncToken": string,
    "items": [
      events Resource
    ]
  }

*/

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_CALENDAR: {
      return { ...state, ...payload };
    }

    default: {
      return state;
    }
  }
};
