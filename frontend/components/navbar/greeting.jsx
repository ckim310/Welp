import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const display = this.props.currentUser ? (
      <div className="greeting">
        <p>Hello, {this.props.currentUser.first_name} </p>
        <button onClick={this.props.logout}>Log out</button>
      </div>
    ) : (
      <div className="greeting">
        <Link className="btn login" to="/login">Log in</Link>
        <Link className="btn signup" to="/signup">Sign Up</Link>
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