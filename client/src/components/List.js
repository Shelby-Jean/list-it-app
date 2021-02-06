import Category from '../containers/Category';
import Item from '../containers/Item';

const List = (props) => {
  return (
    <div>
      <div className="list-header">
        <h3>Grocery List</h3>
      </div>
      {/* <Category /> */}
      <Item />
    </div>
  );
}

export default List;