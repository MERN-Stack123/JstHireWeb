// registerAction.js

import { hrLoginApi } from "../../api/hrLoginApi";

import {
  HR_LOGIN_SUCCESS,
  HR_LOGIN_REQUEST,
  HR_LOGIN_FAILURE,
} from "./actionTypes";

// Action Creators
export const hrLoginRequest = () => ({
  type: HR_LOGIN_REQUEST,
});

export const hrLoginSuccess = () => ({
  type: HR_LOGIN_SUCCESS,
});

export const hrLoginFailure = (error) => ({
  type: HR_LOGIN_FAILURE,
  payload: error,
});

// Thunk Action
export const hrLoginUser = (values) => async (dispatch) => {
  dispatch(hrLoginRequest()); // Dispatch request action to indicate data requesting is in progress

  try {
    const data = await hrLoginApi(values); // Call the hrLoginApi API function from api.js
    dispatch(hrLoginSuccess()); // Dispatch success action with the received data
  } catch (error) {
    dispatch(hrLoginFailure(error)); // Dispatch failure action with the error message
  }
};
