import { connect } from 'react-redux';
import Item from '../components/Item';
//import actions

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(Item);