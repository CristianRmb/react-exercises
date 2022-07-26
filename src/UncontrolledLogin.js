import React from 'react';

/* Implement an UncontrolledLogin component that implements all the operations 
of the Login component, but does so using uncontrolled components. */

export class UncontrolledLogin extends React.Component {
  handleLogin = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    this.setState({
      username: username,
      password: password,
      remember: remember,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <input placeholder='Username' name='username' />
          <input placeholder='Password' name='password' type='password' />
          <input name='remember' type='checkbox' />
          <button type='submit'>Login</button>
          <button type='reset'>Reset</button>
        </form>
      </div>
    );
  }
}
