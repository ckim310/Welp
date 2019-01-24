import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const display = this.props.currentUser ? (
      <div className="greeting">
        <div className="greeting-user">Hello, {this.props.currentUser.first_name} </div>
        <button onClick={this.props.logout} className="btn logout">Log out</button>
      </div>
    ) : (
      <div className="greeting">
        <Link className="nav-bar-link" id="login" to="/login">Log in</Link>
        <Link className="btn signup" to="/signup">Sign Up</Link>
      </div>
    )

    return(
      <div className="nav-bar">
        <div className="nav-bar-links">
          <a href="#" className="nav-bar-link" id="write-review">Write a review</a>
        </div>
        {display}
      </div>
    )
  }
}

export default NavBar;