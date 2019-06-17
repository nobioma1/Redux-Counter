import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import './counter.css';

class Counter extends Component {
  incrementIfOdd = () => {
    if (this.props.count % 2 !== 1) this.props.increment();
  };

  incrementAsync = () => {
    setTimeout(() => {
      this.props.increment();
    }, 1000);
  };

  render() {
    // Fill in the two button onClick methods
    // Upon clicking these buttons, the count
    // should decrement or increment accordingly
    return (
      <div className="counter">
        <h2>
          Clicked: <span>{this.props.count} </span> times
        </h2>
        <div className="buttons">
          <button onClick={this.props.increment}>+</button>
          <button
            onClick={this.props.decrement}
            disabled={this.props.count <= 0 ? true : false}
          >
            -
          </button>
          {/* Uncomment these button tags if you got
              around to implementing the extra credit functions */}
          <button
            onClick={this.incrementIfOdd}
            disabled={this.props.count % 2 !== 1 ? true : false}
          >
            Increment if odd
          </button>
          <button onClick={this.incrementAsync}>Increment async</button>
        </div>
      </div>
    );
  }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(
  mapStateToProps,
  { increment, decrement },
)(Counter);
