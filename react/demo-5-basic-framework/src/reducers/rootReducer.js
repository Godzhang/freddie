import { combineReducers } from "redux";
import isLogin from "./indexReducer";

const rootReducer = combineReducers({
  isLogin,
});

export default rootReducer;
