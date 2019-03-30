import { connect } from "react-redux";
import Actions from "./Actions";

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: "COUNTER_INCREMENT", payload: null }),
    onDecrement: () => dispatch({ type: "COUNTER_DECREMENT", payload: null })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Actions);
