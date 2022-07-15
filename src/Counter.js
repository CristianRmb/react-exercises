import React from 'react';
import { CounterDisplay } from './CounterDisplay';

/* Modify the Counter component so that the interval is initialized within the componentDidMount 
life cycle method instead of the constructor. Is the constructor still required? */

export class Counter extends React.Component {

  state = {
    count: this.props.initialValue ?? 0,
  };

/*   constructor(props) {
    super(props);


    setInterval(() => {
      this.setState(() => {
        return { count: this.state.count + (this.props.incrementAmount ?? 1) };
      });
    }, this.props.incrementInterval ?? 1000);
  } */


  componentDidMount(){
    setInterval(()=> {
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