import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, clearSessionErrors, login } from '../../actions/session_actions';

const mapStateToProps = state => {
  const errors = state.errors.session;
  
  return {
    errors,
    formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    demoLogin: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);