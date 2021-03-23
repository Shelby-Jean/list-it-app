import Item from '../containers/Item';
import AddItem from '../containers/AddItem';

const Category = (props) => {
  return (
    <div>
        <div>
          <h3 className="category-header">{props.catName}</h3>
        </div>
      {props.items.map(item => {
        if(item.category_id === props.catId) {
          return <Item 
                    itemName={item.item_name} 
                    quantity={item.quantity} 
                    checked={item.checked}
                    itemId={item.item_id} 
                    catId={item.category_id}
                    key={item.item_id}
                  />
        }
      })}
      <AddItem catId={props.catId} />
    </div>
  );
}

export default Category;