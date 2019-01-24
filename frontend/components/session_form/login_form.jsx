import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import HeaderForm from './header_form';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
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

  demoLogin(e) {
    e.preventDefault();
    const user = { email: "demo@email.com", password: "password" };
    this.props.demoLogin(user);
  }

  render() {

    const errors = this.props.errors.map((err, idx) => {
      return <li key={idx}>{err}</li>
    });

    return (
      <div className="container-main">
        <HeaderForm />
        
        <div className="session-wrapper">
  
          <div className="session-form-wrapper">
            <ul className="form-group-errors">
              {errors}
            </ul>
            <div className="session-form login">
              <h2 className="session-form-header">Log In to Welp</h2>
              <strong>New to Yelp? <Link to="/signup">Sign up</Link></strong>
              <br/>
              <p className="fineprint">By logging in, you agree with Welp's Terms of Service
              and Privacy Policy</p>

              <div className="demo-login">
                <button className="btn-demo-login" onClick={this.demoLogin}>Demo Log In</button>
              </div>

              <fieldset className="session-form-divider">
                <legend className="divider">OR</legend>
              </fieldset>

              <form onSubmit={this.handleSubmit}>
                <div className="session-form-login-data">

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
                </div>

                <div className="form-group">
                  <input className="form-submit" type="submit" value="Log In" />
                  <p className="form-submit-link">
                    New to Welp? <Link to="signup">Sign Up</Link>
                  </p>
                </div>
              </form>

            </div>

          </div>

          <div className="session-form-img">
            <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt="signup-illustration" />
          </div>

        </div>
      </div>
    )
  }
}

export default LoginForm;