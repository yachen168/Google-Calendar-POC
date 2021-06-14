import { combineReducers } from "redux";

import auth from "./auth";
import calendar from "./calendar";

export default combineReducers({ auth, calendar });
