import Item from '../containers/Item';
import AddItem from '../containers/AddItem';

const Category = (props) => {
  return (
    <div>
        <div>
          <h3 className="category-header">{props.catName}</h3>
        </div>
      {props.items.map(item => {
        if(item.category_name === props.catName) {
          return <Item itemName={item.item_name} quantity={item.quantity} itemId={item.item_id} key={item.item_id} />
        }
      })}
      <AddItem catId={props.catId} />
    </div>
  );
}

export default Category;