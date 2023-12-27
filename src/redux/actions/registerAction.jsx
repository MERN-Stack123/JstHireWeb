// registerAction.js

import { fetchData } from "../../api/registerApi";

import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
} from "./actionTypes";

// Action Creators
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = () => ({
  type: FETCH_DATA_SUCCESS,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

// Thunk Action
export const fetchDataAction = (values) => async (dispatch) => {
  dispatch(fetchDataRequest()); // Dispatch request action to indicate data fetching is in progress

  try {
    const data = await fetchData(values); // Call the fetchData API function from api.js
    dispatch(fetchDataSuccess()); // Dispatch success action with the received data
  } catch (error) {
    dispatch(fetchDataFailure(error)); // Dispatch failure action with the error message
  }
};
