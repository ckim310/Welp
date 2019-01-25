import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownHandler = this.dropdownHandler.bind(this);
  }

  dropdownHandler(e) {
    e.preventDefault();
    document.getElementById("dropdown").classList.toggle("show");
  }

  render() {
    const display = this.props.currentUser ? (
      <div className="greeting">
        <div className="greeting-notif-wrapper">
          <div className="message-icon">
            <a href="#">
              <i className="fas fa-comment-alt"></i>
            </a>
          </div>

          <div className="bell-icon">
            <a href="#">
              <i className="fas fa-bell"></i>
            </a>
          </div>

          {/* <div className="greeting-user">Hello, {this.props.currentUser.first_name} </div> */}

          <div className="user-dropdown">
            <button onClick={this.dropdownHandler}>
              Hello {this.props.currentUser.first_name}<i className="fas fa-cookie-bite"></i>
            </button>
            <div id="dropdown" className="dropdown-content">
              <div className="dropdown-logout" onClick={this.props.logout}>Logout</div>
            </div>
          </div>
        </div>

        {/* <button onClick={this.props.logout} className="btn logout">Log out</button> */}
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
          <a href="https://github.com/ckim310" className="nav-bar-link" id="github">Github <i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/christine-kim-46857544/" className="nav-bar-link" id="linkedin">LinkedIn <i className="fab fa-linkedin"></i></a>
        </div>
        {display}
      </div>
    )
  }
}

export default NavBar;