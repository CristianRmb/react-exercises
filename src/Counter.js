import React from 'react';

/* Modify the Counter component so that the initial value of the counter,
the increment interval and the increment amount are passed as props to the component. */

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.initialValue ?? 0,
    };

    setInterval(() => {
      this.setState(() => {
        return { count: this.state.count + this.props.incrementAmount ?? 0 };
      });
    }, this.props.incrementInterval ?? 1000);
  }

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
/* Props: initialValue, incrementAmount, incrementInterval */