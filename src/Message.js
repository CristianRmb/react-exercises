import React from 'react';
import { HelloWorld } from './HelloWorld';

export class Message extends React.Component{
  render(){
    return(
      <div>
        <HelloWorld/>
        <p>What a beautiful day!</p>
      </div>
    );
  }
}