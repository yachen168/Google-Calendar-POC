import { SIGN_IN, SIGN_OUT } from "./actionTypes";

export const signIn = (userId) => {
  return { type: SIGN_IN, payload: userId };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};

export const setIsSignIn = (data) => {
  return { type: "SET_IS_SIGN_IN", payload: data };
};
