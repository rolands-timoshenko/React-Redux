import { createStore } from "redux";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case "COUNTER_INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "COUNTER_DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default createStore(reducer);
