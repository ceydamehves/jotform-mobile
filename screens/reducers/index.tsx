import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  forms: contentReducer,
  login: loginReducer
});
