import { combineReducers } from "redux";
import AuthRegisterCompany from "./AuthRegisterCompany";
import AuthLoginCompany from "./AuthLoginCompany";
import AuthLoginWorker from "./AuthLoginWorker";
import AuthRegisterWorker from "./AuthRegisterWorker";

const rootReducers = combineReducers({
  AuthRegisterCompany,
  AuthLoginCompany,
  AuthRegisterWorker,
  AuthLoginWorker,
});

export default rootReducers;
