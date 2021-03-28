import { connect } from 'react-redux';
import LogIn from '../components/LogIn';
import { logIn } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (user) => dispatch(logIn(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);