import config from "../../config/baseAttrs/common";
import reducerMap from "./chartReducerMap";

export default (state = config, action) => {
  if (reducerMap[action.type]) {
    return reducerMap[action.type](state, action);
  } else {
    return state;
  }
};
