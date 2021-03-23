import { connect } from 'react-redux';
import Item from '../components/Item';
import { deleteItem, decreaseQuantity, increaseQuantity, updateChecked } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    items: state.items
  }
}

const mapDisptachToProps = (dispatch) => {
  return {    
    deleteItem: (id) => dispatch(deleteItem(id)),
    decreaseQuantity: (updatedItem) => dispatch(decreaseQuantity(updatedItem)),
    increaseQuantity: (updatedItem) => dispatch(increaseQuantity(updatedItem)),
    updateChecked: (updatedItem) => dispatch(updateChecked(updatedItem))
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(Item);