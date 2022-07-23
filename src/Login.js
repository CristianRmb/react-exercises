import React from 'react';

/* Create a Login component containing three inputs: 
a username input, a password input and a remember checkbox. 
All three inputs should be controlled components. */

export class Login extends React.Component {
  state = {
    username: '',
    password: '',
    remember: false,
  };

  handleInputs = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    const check = event.target.checked;
    const value = event.target.value;

    this.setState({
      [name]: type === 'checkbox' ? check : value,
    });
  };

  /* per vedere se funziona */
  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <input
          placeholder='Username'
          name='username'
          value={this.state.username}
          onChange={this.handleInputs}
        />
        <input
          placeholder='Password'
          name='password'
          type={'password'}
          value={this.state.password}
          onChange={this.handleInputs}
        />
        <input
          name='remember'
          type={'checkbox'}
          checked={this.state.remember}
          onChange={this.handleInputs}
        />
      </div>
    );
  }
}
