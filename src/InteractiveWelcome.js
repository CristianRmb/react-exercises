import React from 'react';
import { Welcome } from './Welcome ';

/* Create an InteractiveWelcome component that renders an input tag and the Welcome component. 
Pass the current content of the input tag to the name prop of the Welcome component. 
The input tag should be a controlled component. */

export class InteractiveWelcome extends React.Component {
  state = {
    nome: '',
  };

  handleInput = (event) => {
    this.setState({
      nome: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Welcome name={this.state.nome} />
        <input
          name='nome'
          value={this.state.nome}
          onChange={this.handleInput}
        />
      </div>
    );
  }
}
