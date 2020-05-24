import { UserMannType } from "../actions";
let isLogin = false;

function indexReducer(state = isLogin, action) {
  switch (action.type) {
    case UserMannType.LOG_IN:
      return true;
    case UserMannType.LOG_OUT:
      return false;
    default:
      return state;
  }
}

export default indexReducer;
