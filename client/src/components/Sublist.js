import Item from '../containers/Item';

const Sublist = (props) => {
  return (
    <div>
      <h3>Sublist Header</h3>
      <Item />
    </div>
  );
}

export default Sublist;

// props.groceryList.sublists.map(sublist => (
//   <h3>{sublist.name}</h3>
// ))