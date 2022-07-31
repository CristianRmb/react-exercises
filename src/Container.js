import React from 'react';

/* Modify the Container component so that it can display a title received within the title prop. */

export class Container extends React.Component {
  state = {};
  render() {
    return (
      <div className='bg-white border-2 border-red-500 p-5'>
        <h1 className='font-bold'>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}
