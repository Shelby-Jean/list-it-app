import Category from '../containers/Category';
// import Item from '../containers/Item';
import '../css/components/list-component.css';

const List = (props) => {
  return (
    <div>
      <div className="list-header">
        <h3>Grocery List</h3>
      </div>
      <Category />
    </div>
  );
}

export default List;