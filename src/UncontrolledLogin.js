import React, { createRef } from 'react';

/* Modify the UncontrolledLogin component so that the username input is
 automatically focused when the component renders the first time. */

export class UncontrolledLogin extends React.Component {
  _formRef = createRef();

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

  componentDidMount() {
    this._formRef.current.elements.username.focus();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin} ref={this._formRef}>
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
