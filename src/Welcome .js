import React from 'react';

/* Create a Welcome class component that receives a name prop and renders the Welcome, 
{name}! message within a p tag. Render this component to you App component, 
passing it a name prop of your choosing. */

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name ?? 'Caio'}</p>
        <p>Your age is {this.props.age ?? '000'}</p>
      </div>
    );
  }
}
/* Anche questa è una possibilita:  */
// Welcome.defaultProps = {
//   name: 'Tizio',
// };
