import { connect } from 'react-redux';
import Item from '../components/Item';
//import actions

const mapStateToProps = (state) => {
  return {
    groceryList: state.groceryList
  }
}

export default connect(mapStateToProps)(Item);