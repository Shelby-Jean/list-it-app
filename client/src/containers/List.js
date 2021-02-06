import { connect } from 'react-redux';
import List from '../components/List';
//import actions

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(List);