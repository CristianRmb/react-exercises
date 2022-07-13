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
        <Counter initialValue={100} incrementAmount={-1} incrementInterval={2000}/>
      </div>
    );
  }
}
