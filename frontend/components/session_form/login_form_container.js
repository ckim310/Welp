import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
  const errors = state.errors.session;
  
  return {
    errors,
    formType: 'login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);