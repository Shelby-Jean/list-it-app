import Sublist from '../containers/Sublist';
// import Item from '../containers/Item';
import '../css/components/list-component.css';

const List = (props) => {
  return (
    <div>
      <div className="list-header">
        <h3>Grocery List</h3>
      </div>
      <Sublist />
    </div>
  );
}

export default List;