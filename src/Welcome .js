import React from 'react';
import { Age } from './Age';

/* Modify the Welcome component so that the Age component is rendered 
only if the age prop is present. */
export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name ?? 'Caio'}</p>
        {this.props.age > 18 && this.props.age < 65 && (
          <Age age={this.props.age} />
        )}
      </div>
    );
  }
}
