import React from 'react';

/* Extract the h1 tag showing the count state variable into a new component called CounterDisplay 
and render it within the Counter component, passing it the count state variable as a prop. */

export class CounterDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.initialValue,
    };

    setInterval(() => {
      this.setState(() => {
        return { count: this.state.count + this.props.incrementAmount };
      });
    }, this.props.incrementInterval);
  }

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
