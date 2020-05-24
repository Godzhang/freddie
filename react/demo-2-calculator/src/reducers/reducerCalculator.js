import { CalculatorType } from "../actions";

const initState = {
  n1: "",
  n2: "",
  opr: "",
  eq: "",
  result: "",
};

const reducerCalculator = (state = initState, action) => {
  switch (action.type) {
    case CalculatorType.NUM:
      return {
        n1: action.n1,
        n2: action.n2,
        opr: action.opr,
        eq: action.eq,
        result: action.result,
      };
    case CalculatorType.OPR:
      return {
        n1: action.n1,
        n2: action.n2,
        opr: action.opr,
        eq: action.eq,
        result: action.result,
      };
    case CalculatorType.EQUALS:
      let result;
      const { n1, n2, opr } = action;
      switch (opr) {
        case "add":
          result = parseInt(n1) + parseInt(n2);
          break;
        case "minus":
          result = parseInt(n1) - parseInt(n2);
          break;
        case "multiple":
          result = parseInt(n1) * parseInt(n2);
          break;
        case "divide":
          if (parseInt(n2) !== 0) {
            result = parseInt(n1) / parseInt(n2);
          } else {
            result = Number.NaN;
          }
          break;
        default:
          result = 0;
          break;
      }
      return {
        n1: action.n1,
        n2: action.n2,
        opr: action.opr,
        eq: action.eq,
        result,
      };
    case CalculatorType.CLS:
      return {
        n1: "",
        n2: "",
        opr: "",
        eq: "",
        result: "",
      };
    default:
      return state;
  }
};

export default reducerCalculator;
