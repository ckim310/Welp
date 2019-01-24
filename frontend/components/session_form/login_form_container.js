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
    demoLogin: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);