import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import { signUp } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDisptachToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user))
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(SignUp);