import { connect } from 'react-redux';
import List from '../components/List';
//import actions

const mapStateToProps = (state) => {
  return {
    groceryList: state.groceryList
  }
}

export default connect(mapStateToProps)(List);