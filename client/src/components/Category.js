import Item from '../containers/Item';

const Category = (props) => {
  const allCategoryNames = props.items.map(item => item.category_name);
  const uniqueCategoryNames = allCategoryNames.filter((name, index) => name.indexOf(name) !== index);

  return (
    <div>
     {uniqueCategoryNames.map(name => (
        <div>
          <h3 className="category-header">{name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Category;

// props.groceryList.sublists.map(sublist => (
//   <h3>{sublist.name}</h3>
// ))