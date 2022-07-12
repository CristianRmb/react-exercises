import React from 'react';

export class Age extends React.Component {
  render() {
    return (
      <div>
        {this.props.age > 18 ? (
          <p>Your age is {this.props.age}</p>
        ) : (
          <p>You are very young!</p>
        )}
      </div>
    );
  }
}
/* Modify the Age component so that the "Your age is " message is rendered only 
if the age prop is greater than 18. 
Otherwise render the "You are very young!" message. */
