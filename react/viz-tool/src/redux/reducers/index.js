import { combineReducers } from "redux";
import chartConfig from "./chartReducer.js";
import sheetReducer from "./sheetReducer";
import chartSize from "./sizeReducer";

export default combineReducers({ chartConfig, sheetReducer, chartSize });
