// reducers.js

import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  status: " ",
  loading: false,
  error: null,
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        status: "pending",
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        status: "success",
        loading: false,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        status: "error",
        loading: false,
        error: action.payload,
      };
    default:
      return state;  
  }
};
