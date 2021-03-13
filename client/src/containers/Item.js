import { connect } from 'react-redux';
import Item from '../components/Item';
import { deleteItem, decreaseQuantity, increaseQuantity } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    items: state.items
  }
}

const mapDisptachToProps = (dispatch) => {
  return {    
    deleteItem: (id) => dispatch(deleteItem(id)),
    decreaseQuantity: (id, quantity) => dispatch(decreaseQuantity(id, quantity)),
    increaseQuantity: (id, quantity) => dispatch(increaseQuantity(id, quantity))
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(Item);