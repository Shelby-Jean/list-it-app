import { connect } from 'react-redux';
import Sublist from '../components/Sublist';
//import actions

const mapStateToProps = (state) => {
  return {
    groceryList: state.groceryList
  }
}

export default connect(mapStateToProps)(Sublist);