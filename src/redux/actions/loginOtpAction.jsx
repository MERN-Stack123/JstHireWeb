import { loginApi } from "../../api/loginOtpApi";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  VERIFICATION_REQUEST,
  VERIFICATION_SUCCESS,
  VERIFICATION_FAILURE,
} from "./actionTypes";

// Login actions
export const loginRequest = () => ({ type: LOGIN_REQUEST });

export const loginSuccess = () => ({ type: LOGIN_SUCCESS });

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginUser = (values) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const data = await loginApi(values);
    dispatch(loginSuccess());
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

// OTP verification actions
export const verificationRequest = () => ({ type: VERIFICATION_REQUEST });

export const verificationSuccess = () => ({ type: VERIFICATION_SUCCESS });

export const verificationFailure = (error) => ({
  type: VERIFICATION_FAILURE,
  payload: error,
});

export const verifyOtp = (values) => async (dispatch) => {
  dispatch(verificationRequest());
  try {
    const data = await verifyOtpApi(values);
    dispatch(verificationSuccess());
  } catch (error) {
    dispatch(verificationFailure(error));
  }
};
