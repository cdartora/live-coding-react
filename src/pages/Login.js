import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      redirect: false,
      isDisabled: true,
    };
  }

  inputHandler = ({target}) => {
    this.setState({
      [target.name]: target.value,
    }, this.validate)
  };

  validate = () => {
    const {email, password} = this.state;

    const REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const errorCases = [
      REGEX.test(email),
      password.length >= 6,
    ];

    const isDisabled = !(errorCases
      .every((error) => error === true));

    this.setState({isDisabled});
  };

  render() {
    const {email, password, redirect, isDisabled} = this.state;
    if (redirect) return <Redirect to="/home" />
    return(
      <div>
        <h1>Login</h1>
        <label htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={this.inputHandler}
        />
        <br />
        <label htmlFor="password">
          Senha:
        </label>
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={this.inputHandler}
        />
        <br />
        <button
          type="button"
          disabled={isDisabled}
          onClick={() => this.setState({redirect: true})}
        >
          Entrar
        </button>
      </div>
    )
  }
}

export default Login;