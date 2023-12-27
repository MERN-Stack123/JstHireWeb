import { combineReducers } from "redux";
import { registerReducer } from "./registerReducer";
import { hrRegisterReducer } from "./hrRegisterReducer";
import { loginOReducer } from "./loginOReducer";
import { hrLoginReducer } from "./hrLoginReducer";

const rootReducer = combineReducers({
  register: registerReducer,
  loginotp: loginOReducer,
  hrregister: hrRegisterReducer,
  hrlogin: hrLoginReducer,
});

export default rootReducer;
