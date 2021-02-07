import Item from '../containers/Item';
import AddItem from '../containers/AddItem';

const Category = (props) => {
  // const catNames = props.categories.map(cat => cat.category_name);
  // const itemCats = props.items.map(item => item.category_name);
  // const items = props.items.filter(item => item.category_name === "Produce");
  // console.log(items.map(item => item.item_name))

  return (
    <div>
     {props.categories.map(category => (
        <div key={category.category_id}>
          <h3 className="category-header">{category.category_name}</h3>
          
          <Item />
          <AddItem />
        </div>
      ))}
    </div>
  );
}

export default Category;