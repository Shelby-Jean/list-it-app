import { connect } from 'react-redux';
import AddItem from '../components/AddItem';
import { addItem } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);