import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  VERIFICATION_REQUEST,
  VERIFICATION_SUCCESS,
  VERIFICATION_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  loginStatus: "",
  verificationStatus: "",
  loading: false,
  error: "",
};

export const loginOReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loginStatus: "pending", loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loginStatus: "success", loading: false, error: null };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginStatus: "error",
        loading: false,
        error: action.payload,
      };
    case VERIFICATION_REQUEST:
      return { ...state, verificationStatus: "pending", loading: true, error: null };
    case VERIFICATION_SUCCESS:
      return { ...state, verificationStatus: "success", loading: false, error: null };
    case VERIFICATION_FAILURE:
      return {
        ...state,
        verificationStatus: "error",
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
