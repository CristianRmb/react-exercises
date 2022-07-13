import React from 'react';
import { Counter } from './Counter';
import { Message } from './Message';
import { Welcome } from './Welcome ';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Message />
        <Welcome name='John' age='19' />
        <Counter/>
      </div>
    );
  }
}
