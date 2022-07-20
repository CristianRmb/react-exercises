import React from 'react';
import { Age } from './Age';

export class Welcome extends React.Component {
  controllo(props) {
    const age = props.age;
    if (age > 18) {
      return <Age age={this.props.age} />;
    }
  }
  render() {
    const renderAge = this.props.age;
    return (
      <div>
        <p>Welcome, {this.props.name ?? 'Caio'}</p>
        {(renderAge > 18) ? (<Age age={this.props.age}/>):(null)}
      </div>
    );
  }
}
// age passa da App a Welcome e da Welcome a Age
