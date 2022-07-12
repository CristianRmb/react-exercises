import React from 'react';
import { HelloWorld } from './HelloWorld';

/* Write a class component called `App` that renders the `Hello` component within a `div` tag. */
export class App extends React.Component {
  render(){
    return ( 
      <div>
        <HelloWorld />
        <p>Classe APP</p> {/* solo per vedere se funziona correttamente */}
      </div>
    );
  }
}
