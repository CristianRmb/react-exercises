import React from 'react';
import { Age } from './Age';

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name ?? 'Caio'}</p>
        {/* <Age age={this.props.age>18 ? this.props.age: "< 18"} /> */}
        <Age age={this.props.age > 18 && this.props.age} />
        {/* stampa solo se >18 */}
      </div>
    );
  }
}
// age passa da App a Welcome e da Welcome a Age
