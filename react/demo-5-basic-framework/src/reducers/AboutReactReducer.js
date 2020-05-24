import { connect } from "react-redux";
import About from "../components/about/About";
import { UserMannType } from "../actions";

function mapStateToProps(state) {
  return {
    isLogin: state.isLogin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    LOGOUT: function (history) {
      dispatch({ type: UserMannType.LOG_OUT });
      history.push("/");
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
