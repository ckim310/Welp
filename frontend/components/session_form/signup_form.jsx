
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import HeaderForm from './header_form';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      zipcode: "",
      email: "",
      birthday_month: "",
      birthday_day: "",
      birthday_year: "",
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
        <div className="session-container">
          <div className="session-wrapper">
            <div className="session-form-wrapper">
            
              <ul className="form-group-errors">
                {errors}
              </ul>

              <div className="session-form signup">
                <h2 className="session-form-header">Sign Up for Welp</h2>
                <strong>Where you can get help in times of welp</strong>
                <br/>
                <br/>
                <p className="fineprint">By continuing, you agree to Welp's Terms of Service
                and acknowledge Welp's Privacy Policy.</p>

                <div className="demo-login">
                  <button className="btn-demo-login" onClick={this.demoLogin}>Demo Log In</button>
                </div>

                <fieldset className="session-form-divider">
                  <legend className="divider">OR</legend>
                </fieldset>

                <form onSubmit={this.handleSubmit}>
                  <div className="session-form-signup-data">
                    <ul className="signup-name">
                      <li className="signup-name first">
                        <input
                          type="text"
                          value={this.state.first_name}
                          onChange={this.handleInput('first_name')}
                          placeholder="First Name"
                          required="required"/>
                      </li>
                      
                      <li className="signup-name last">
                        <input
                          type="text"
                          value={this.state.last_name}
                          onChange={this.handleInput('last_name')}
                          placeholder="Last Name"
                          required="required"/>
                      </li>
                    </ul>

                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.handleInput('email')}
                      placeholder="Email"
                      />

                    <input

                      type="password"
                      value={this.state.password}
                      onChange={this.handleInput('password')}
                      placeholder="Password"
                      required="required"/>
                  </div>

                  <div className="session-form-extra">
                    <label htmlFor="zipcode">
                      <input
                        type="text"
                        id="zipcode"
                        value={this.state.zipcode}
                        onChange={this.handleInput('zipcode')}
                        placeholder="ZIP code"
                        required="required"/>
                    </label>
                      
                    <strong>Birthday</strong>
                    <br/>
                    
                    <select name="bday-month" form="bday-m-form" onChange={this.handleInput('birthday_month')}>
                      <option value selected disabled>Month</option>
                      <option value='1'>Jan</option>
                      <option value='2'>Feb</option>
                      <option value='3'>Mar</option>
                      <option value='4'>Apr</option>
                      <option value='5'>May</option>
                      <option value='6'>Jun</option>
                      <option value='7'>Jul</option>
                      <option value='8'>Aug</option>
                      <option value='9'>Sep</option>
                      <option value='10'>Oct</option>
                      <option value='11'>Nov</option>
                      <option value='12'>Dec</option>
                    </select>

                    <select name="bday-day" form="bday-d-form" onChange={this.handleInput('birthday_day')}>
                      <option value selected disabled>Day</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='10'>10</option>
                      <option value='11'>11</option>
                      <option value='12'>12</option>
                      <option value='13'>13</option>
                      <option value='14'>14</option>
                      <option value='15'>15</option>
                      <option value='16'>16</option>
                      <option value='17'>17</option>
                      <option value='18'>18</option>
                      <option value='19'>19</option>
                      <option value='20'>20</option>
                      <option value='21'>21</option>
                      <option value='22'>22</option>
                      <option value='23'>23</option>
                      <option value='24'>24</option>
                      <option value='25'>25</option>
                      <option value='26'>26</option>
                      <option value='27'>27</option>
                      <option value='28'>28</option>
                      <option value='29'>29</option>
                      <option value='30'>30</option>
                      <option value='31'>31</option>
                    </select>

                    <select name="bday-year" form="bday-y-form" onChange={this.handleInput('birthday_year')}>
                      <option value selected disabled>Year</option>
                      <option value='2019'>2019</option>
                      <option value='2018'>2018</option>
                      <option value='2017'>2017</option>
                      <option value='2016'>2016</option>
                      <option value='2015'>2015</option>
                      <option value='2014'>2014</option>
                      <option value='2013'>2013</option>
                      <option value='2012'>2012</option>
                      <option value='2011'>2011</option>
                      <option value='2010'>2010</option>
                      <option value='2009'>2009</option>
                      <option value='2008'>2008</option>
                      <option value='2007'>2007</option>
                      <option value='2006'>2006</option>
                      <option value='2005'>2005</option>
                      <option value='2004'>2004</option>
                      <option value='2003'>2003</option>
                      <option value='2002'>2002</option>
                      <option value='2001'>2001</option>
                      <option value='2000'>2000</option>
                      <option value='1999'>1999</option>
                      <option value='1998'>1998</option>
                      <option value='1997'>1997</option>
                      <option value='1996'>1996</option>
                      <option value='1995'>1995</option>
                      <option value='1994'>1994</option>
                      <option value='1993'>1993</option>
                      <option value='1992'>1992</option>
                      <option value='1991'>1991</option>
                      <option value='1990'>1990</option>
                      <option value='1989'>1989</option>
                      <option value='1988'>1988</option>
                      <option value='1987'>1987</option>
                      <option value='1986'>1986</option>
                      <option value='1985'>1985</option>
                      <option value='1984'>1984</option>
                      <option value='1983'>1983</option>
                      <option value='1982'>1982</option>
                      <option value='1981'>1981</option>
                      <option value='1980'>1980</option>
                      <option value='1979'>1979</option>
                      <option value='1978'>1978</option>
                      <option value='1977'>1977</option>
                      <option value='1976'>1976</option>
                      <option value='1975'>1975</option>
                      <option value='1974'>1974</option>
                      <option value='1973'>1973</option>
                      <option value='1972'>1972</option>
                      <option value='1971'>1971</option>
                      <option value='1970'>1970</option>
                      <option value='1969'>1969</option>
                      <option value='1968'>1968</option>
                      <option value='1967'>1967</option>
                      <option value='1966'>1966</option>
                      <option value='1965'>1965</option>
                      <option value='1964'>1964</option>
                      <option value='1963'>1963</option>
                      <option value='1962'>1962</option>
                      <option value='1961'>1961</option>
                      <option value='1960'>1960</option>
                      <option value='1959'>1959</option>
                      <option value='1958'>1958</option>
                      <option value='1957'>1957</option>
                      <option value='1956'>1956</option>
                      <option value='1955'>1955</option>
                      <option value='1954'>1954</option>
                      <option value='1953'>1953</option>
                      <option value='1952'>1952</option>
                      <option value='1951'>1951</option>
                      <option value='1950'>1950</option>
                      <option value='1949'>1949</option>
                      <option value='1948'>1948</option>
                      <option value='1947'>1947</option>
                      <option value='1946'>1946</option>
                      <option value='1945'>1945</option>
                      <option value='1944'>1944</option>
                      <option value='1943'>1943</option>
                      <option value='1942'>1942</option>
                      <option value='1941'>1941</option>
                      <option value='1940'>1940</option>
                    </select>
                  </div>

                  <div className="signup-fineprint">
                    <p className="fineprint">
                    You also understand that Welp is by no means a substitute of yelp. Thank you for signing up!</p>
                  </div>

                  <div className="form-group">
                    <input className="form-submit" type="submit" value="Sign Up"/>
                    <p className="form-submit-link">
                      Already a Welper? <Link to="/login">Log In</Link>
                    </p>
                  </div>
                </form>

              </div>
            </div>

            <div className="session-form-img">
              <img src="./signup_illustration.png" alt="signup-illustration"/>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default SignupForm;