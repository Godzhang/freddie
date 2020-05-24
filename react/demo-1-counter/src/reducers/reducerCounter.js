import { CounterType } from "../actions";

const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case CounterType.INCREMENT:
      return state + 1;
    case CounterType.DECREMENT:
      return state - 1;
    case CounterType.DOUBLE:
      return state * 2;
    default:
      return state;
  }
};

export default reducerCounter;
