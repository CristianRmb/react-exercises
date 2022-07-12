import React from 'react';
import { Age } from './Age';

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name ?? 'Caio'}</p>
        <Age age={this.props.age} />
      </div>
    );
  }
}
// age passa da App a Welcome e da Welcome a Age
