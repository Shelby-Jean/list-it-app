import Item from '../containers/Item';
import AddItem from '../containers/AddItem';

const Category = (props) => {

  // const checkCats = () => {
  //   for(let i = 0; i < props.categories.length; i++){
  //     for(let y = 0; y < props.items.length; y++){
  //       if(props.categories[i].category_name === props.items[y].category_name){
  //         console.log(props.items[y].item_name);
  //       }
  //     }
  //   }
  // }
  // checkCats();

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