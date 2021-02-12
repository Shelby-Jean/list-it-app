import { connect } from 'react-redux';
import Item from '../components/Item';
import { deleteItem } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    items: state.items
  }
}

const mapDisptachToProps = (dispatch) => {
  return {    
    deleteItem: (id) => dispatch(deleteItem(id))
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(Item);