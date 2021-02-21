import instance from "./instance";
import decode from "jwt-decode";
import * as types from "./actionTypes";

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      dispatch({
        type: types.SET_USER,
        payload: decode(res.data.token),
      });
      history.push("/");
    } catch (error) {
      console.log(`POST Request Error: ${error}`);
    }
  };
};

export const signin = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", newUser);
      dispatch({ type: types.SET_USER, payload: decode(res.data.token) });
      history.push("/");
    } catch (error) {
      console.log(`POST Request Error: ${error}`);
    }
  };
};
