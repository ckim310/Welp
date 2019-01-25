import { connect } from 'react-redux';
import NavBarRight from './nav_bar_right';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities }) => {
  return {
    currentUser: entities.users[session.currentUserId],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarRight);