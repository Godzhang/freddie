import React, { Component } from "react";
import PropTypes from "prop-types";
import { CounterType } from "../actions";

class CounterComp extends Component {
  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onIncrementAsync = this.onIncrementAsync.bind(this);
    this.onDouble = this.onDouble.bind(this);
  }
  onIncrement() {
    this.props.vstore.dispatch({ type: CounterType.INCREMENT });
  }
  onDecrement() {
    this.props.vstore.dispatch({ type: CounterType.DECREMENT });
  }
  onIncrementAsync() {
    setTimeout(this.onIncrement, 1000);
  }
  onDouble() {
    this.props.vstore.dispatch({ type: CounterType.DOUBLE });
  }
  render() {
    const { value } = this.props;
    return (
      <span>
        <h3>计数器</h3>
        <p>{value} 次</p>
        <p>
          <button onClick={this.onIncrement}>increment +1</button>
          <br />
          <button onClick={this.onDecrement}>decrement -1</button>
          <br />
          <button onClick={this.onIncrementAsync}>
            incrementAsync async +1
          </button>
          <br />
          <button onClick={this.onDouble}>double</button>
        </p>
      </span>
    );
  }
}

CounterType.propTypes = {
  value: PropTypes.number.isRequired,
  store: PropTypes.object,
};

export default CounterComp;
