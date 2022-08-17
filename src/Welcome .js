import React from 'react';
import { Age } from './Age';
import { DisplayLanguage } from './DisplayLanguage';

/* Rewrite the Welcome component to be a function component. */

export function Welcome(props) {
  return (
    <div className='welcome'>
      <DisplayLanguage />
      <p>Welcome, {props.name ?? 'Cristian'}</p>
      {/* {this.props.age > 18 &&
          this.props.age < 65 &&
          this.props.name === 'John' && <Age age={this.props.age} />} */}
      <Age age={props.age} />
    </div>
  );
}
