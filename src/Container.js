import React from 'react';

/* Create a Container component that renders its children within a div tag.
Have the div tag use a white background and a red border, 
either with a custom class or by using tailwindcss. */
export class Container extends React.Component {
  state = {};
  render() {
    return (
      <div className='bg-white border-2 border-red-500 p-5'>
        {this.props.children}
      </div>
    );
  }
}
