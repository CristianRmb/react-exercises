import React from 'react';
import { HelloWorld } from './HelloWorld';
import {Message} from './Message';

/* Write a class component called `App` that renders the `Hello` component within a `div` tag. */
export class App extends React.Component {
  render(){
    return ( 
      <div>
        <HelloWorld />
        <Message />
      </div>
    );
  }
}
