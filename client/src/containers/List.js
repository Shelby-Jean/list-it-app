import { connect } from 'react-redux';
import List from '../components/List';
import { getItems, getCategories } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDisptachToProps = (dispatch) => {
  return {    
    getItems: () => dispatch(getItems()),
    getCategories: () => dispatch(getCategories()),
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(List);