import React from 'react'

/* Write a `Hello` class components that renders the `"Hello, World!"` message within an `h1` tag. */
export class HelloWorld extends React.Component{
  render(){
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>What a beautiful day!</p>
      </div>
    );
  }
}
/* Modify the `Hello` component so that it shows a `p` tag below the `h1` tag with the message 
`"What a beautiful day!"`. */