import React from 'react';
import { Message } from './Message';
import { Welcome } from './Welcome ';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Message />
        <Welcome name={<strong>Pippo</strong>} age='20' />
      </div>
    );
  }
}
