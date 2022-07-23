import React from 'react';

/* Create a ClickTracker component that renders three buttons. 
Implement a single event handler for all three buttons, and track of which button was pressed last.
Show the last button that was pressed in an h1 tag within the ClickTracker component. 
Tip: you can use the event object to access the target property of the event. */

export class ClickTracker extends React.Component {
  state = {
    button: 'press a button',
  };
  handleButton = (event) => {
    const lastButton = event.target.name;
    console.log(event.target);
    console.log(lastButton);

    this.setState({
      button: lastButton,
    });
  };

  render() {
    return (
      <div>
        <h1>Last button pressed: {this.state.button}</h1>
        <button name='fist-button' onClick={this.handleButton}>
          First button
        </button>
        <button name='second-button' onClick={this.handleButton}>
          Second button
        </button>
        <button name='third-button' onClick={this.handleButton}>
          Third button
        </button>
      </div>
    );
  }
}
