import { connect } from "react-redux";
import Home from "../components/home/Home";
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

const HomeReactReducer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeReactReducer;
