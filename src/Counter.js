import React from 'react';

/* Create a Counter class component with an internal state containing a count property, initialized to 0. 
The Counter component should render the count property within an h1 tag, 
and the count property should be incremented by 1 every second; */

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    setInterval(() => {
      this.setState(() => {
        return { count: this.state.count + 1 };
      });
    }, 1000);
  }

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
