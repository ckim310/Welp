import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {

    const errors = this.props.errors.map((err, idx) => {
      return <li key={idx}>{err}</li>
    });

    return (
      <div className="session-form">
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <p className="session-form-login-data">

            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              placeholder="Username"
              required="required" />

            <input
              type="email"
              value={this.state.email}
              onChange={this.handleInput('email')}
              placeholder="Email"
              required="required" />

            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder="Password"
              required="required" />
          </p>

          <input type="submit" value="Log In" />

        </form>
        <ul>
          {errors}
        </ul>
      </div>
    )
  }
}

export default LoginForm;