// registerAction.js

import { hrFetchData } from "../../api/hrRegisterApi";

import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
} from "./actionTypes";

// Action Creators
export const hrFetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const hrFetchDataSuccess = () => ({
  type: FETCH_DATA_SUCCESS,
});

export const hrFetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

// Thunk Action
export const hrFetchDataAction = (values) => async (dispatch) => {
  dispatch(hrFetchDataRequest()); // Dispatch request action to indicate data fetching is in progress

  try {
    const data = await hrFetchData(values); // Call the fetchData API function from api.js
    dispatch(hrFetchDataSuccess()); // Dispatch success action with the received data
  } catch (error) {
    dispatch(hrFetchDataFailure(error)); // Dispatch failure action with the error message
  }
};
