import Item from '../containers/Item';
import AddItem from './AddItem';

const Category = (props) => {
  console.log(props.categories);
  return (
    <div>
     {props.categories.map(category => (
        <div key={category.category_id}>
          <h3 className="category-header">{category.category_name}</h3>
        </div>
      ))}
      {/* <AddItem /> */}
    </div>
  );
}

export default Category;