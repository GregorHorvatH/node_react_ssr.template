import React, { Component } from 'react';

class LoginPage extends Component {

  state = {
    username: '',
    password: '',
  }

  _handleUserNameChange = (event) => {
    const username = event.target.value;

    this.setState({ username });
  }

  _handlePasswordChange = (event) => {
    const password = event.target.value;

    this.setState({ password });
  }

  _handleSubmitPress = (event) => {
    event.preventDefault();

    console.log(this.state); // eslint-disable-line
  }

  render() {
    const { username, password } = this.state;

    return (
      <form className="form-signin" onSubmit = { this._handleSubmitPress }>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

        <input
          type = "text"
          id = "inputUserName"
          className = "form-control"
          placeholder = "User name"
          onChange = { this._handleUserNameChange }
          value = { username }
        />


        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          onChange = { this._handlePasswordChange }
          value = { password }
        />

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    );
  }
}

export default LoginPage;
