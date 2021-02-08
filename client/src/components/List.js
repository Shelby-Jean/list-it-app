import Category from '../containers/Category';

const List = (props) => {
  return (
    <div className="list-container">
      <div className="list-header">
        <h3>Grocery List</h3>
      </div>
      <Category />
    </div>
  );
}

export default List;