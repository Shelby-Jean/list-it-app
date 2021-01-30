import { connect } from 'react-redux';
import LogIn from '../components/LogIn';
import { setUser } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);