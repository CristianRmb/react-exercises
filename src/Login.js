import React from 'react';

/* Add a "login" button to the Login component. 
This button should be disabled as long as the username and password inputs are empty. 
When clicked, the event handler attached to the button should call an onLogin function 
passed as a prop to the Login component, passing it the state. */

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

  onLogin = () => {
    Login.props = {
      username: this.state.username,
      password: this.state.password,
    };
  };

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
        <button
          disabled={!(this.state.username && this.state.password)}
          onClick={this.onLogin}
        >
          Login
        </button>
      </div>
    );
  }
}
