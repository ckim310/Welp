import React from 'react';
import { Link } from 'react-router-dom';

class NavBarRight extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownHandler = this.dropdownHandler.bind(this);
  }

  dropdownHandler(e) {
    e.preventDefault();
    document.getElementById("dropdown").classList.toggle("show");
  }

  render() {
    const userPic = <i className="fas fa-meh fa-2x"></i>;
  
    const display = this.props.currentUser ? (
      <div className="greeting">
        <div className="greeting-notif-wrapper">
          {/* <div className="message-icon">
            <button>
              <i className="fas fa-comment-alt fa-2x"></i>
            </button>
          </div>
  
          <div className="bell-icon">
            <button>
              <i className="fas fa-bell fa-2x"></i>
            </button>
          </div> */}
  
          <div className="user-dropdown">
            <button className="btn-user-dropdown" onClick={this.dropdownHandler}>
              {userPic}
            </button>
            <div id="dropdown" className="dropdown-content-container">
              <div className="dropdown-content">
                <div className="dropdown-arrow">
                </div>
                <div className="dropdown-user-container">
                  <div className="user-pic">{userPic}</div>
  
                  <div className="user-content-container">
                    <div className="user-name">
                      <div className="user-name_first">
                        {this.props.currentUser.first_name}
                      </div>
  
                      <div className="user-name_last">
                        {this.props.currentUser.last_name}
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="dropdown-logout-container">
                  <div className="dropdown-logout" onClick={this.props.logout}>Logout</div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
  
      </div>
    ) : (
        <div className="greeting">
          <Link className="nav-bar-link" id="login" to="/login">Log in</Link>
          <Link className="btn signup" to="/signup">Sign Up</Link>
        </div>
      )
  
    return (
      <div className="nav-bar-right-container">
        {display}
      </div>
    )
  }
}

export default NavBarRight;