import React from 'react';
import { CounterDisplay } from './CounterDisplay';

/* Modify the Counter component so that the interval is initialized within the componentDidMount 
life cycle method instead of the constructor. Is the constructor still required? */

export class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: this.props.initialValue ?? 0,
    };

    setInterval(() => {
      this.setState(() => {
        return { count: this.state.count + (this.props.incrementAmount ?? 1) };
      });
    }, this.props.incrementInterval ?? 1000);
  }

  render() {
    return (
      <CounterDisplay count= {this.state.count}/>
    );
  }
}
/* Props: initialValue, incrementAmount, incrementInterval */