import React from 'react';
import {Message} from './Message';
import { Welcome } from './Welcome ';

/* Write a class component called `App` that renders the `Hello` component within a `div` tag. */
export class App extends React.Component {
  render(){
    return ( 
      <div>
        <Message />
        <Welcome /* name="Pippo" */ />
      </div>
    );
  }
}
