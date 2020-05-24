import { connect } from "react-redux";
import { CalculatorType } from "../actions";
import CalculatorComp from "../components/CalculatorComp";

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    onNumClick: (n1, n2, opr, eq, result) =>
      dispatch({
        type: CalculatorType.NUM,
        n1,
        n2,
        opr,
        eq,
        result,
      }),
    onOprClick: (n1, n2, opr, eq, result) =>
      dispatch({
        type: CalculatorType.OPR,
        n1,
        n2,
        opr,
        eq,
        result,
      }),
    onEqualsClick: (n1, n2, opr, eq, result) =>
      dispatch({
        type: CalculatorType.EQUALS,
        n1,
        n2,
        opr,
        eq,
        result,
      }),
    onClsClick: (n1, n2, opr, eq, result) =>
      dispatch({
        type: CalculatorType.CLS,
        n1,
        n2,
        opr,
        eq,
        result,
      }),
  };
}

export const App = connect(mapStateToProps, mapDispatchToProps)(CalculatorComp);
