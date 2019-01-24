import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, clearSessionErrors } from '../../actions/session_actions';

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);