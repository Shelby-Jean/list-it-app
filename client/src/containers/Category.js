import { connect } from 'react-redux';
import Category from '../components/Category';

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    items: state.items
  }
}

export default connect(mapStateToProps)(Category);