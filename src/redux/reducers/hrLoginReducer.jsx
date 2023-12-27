// hrLoginReducer.js
import {
  HR_LOGIN_REQUEST,
  HR_LOGIN_SUCCESS,
  HR_LOGIN_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  hrloginStatus: "",
  loading: false,
  error: null,
};

export const hrLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case HR_LOGIN_REQUEST:
      return {
        ...state,
        hrloginStatus: "pending",
        loading: true,
        error: null,
      };
    case HR_LOGIN_SUCCESS:
      return {
        ...state,
        hrloginStatus: "success",
        loading: false,
        error: null,
      };
    case HR_LOGIN_FAILURE:
      return {
        ...state,
        hrloginStatus: "error",
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


