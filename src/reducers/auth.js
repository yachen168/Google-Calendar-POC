import { SIGN_IN, SIGN_OUT } from "../actions/actionTypes";
import Cookies from "js-cookie";

const auth = JSON.parse(Cookies.get("auth") || "{}");

const initialState = {
  token: auth,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN: {
      return { ...state, token: payload };
    }

    case SIGN_OUT: {
      return { ...state, token: "" };
    }

    default: {
      return state;
    }
  }
};
