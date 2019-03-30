import { connect } from "react-redux";
import Counter from "./Counter";

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps)(Counter);
