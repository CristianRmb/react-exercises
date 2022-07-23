import React from 'react';

export class ClickCounter extends React.Component {
  state = {
    counter: 0,
  };

  incrementCounter = () => {
    this.setState((state) => {
      return {
        counter: state.counter + this.props.incrementBy,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.counter}</h2>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

ClickCounter.defaultProps = {
  incrementBy: 1,
};