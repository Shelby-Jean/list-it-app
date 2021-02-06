import Item from '../containers/Item';

const Category = (props) => {
  return (
    <div>
      {console.log(props.categories)}
     {/* {props.categories.map(category => (
        <div key={category.category_id}>
          <h3 className="category-header">{category.category_name}</h3>
        </div>
      ))} */}
    </div>
  );
}

export default Category;