import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const display = this.props.currentUser ? (
      <div>
        <p>Hello, {this.props.currentUser.first_name}</p>
        <button onClick={this.props.logout}>Log out</button>
      </div>
    ) : (
      <div>
        <Link className="btn" to="/signup">Sign Up</Link>
        <Link className="btn" to="/login">Log in</Link>
      </div>
    )

    return(
      <>
        {display}
      </>
    )
  }
}

export default Greeting;