// import { MdAddShoppingCart } from 'react-icons/md';
import { useState } from 'react';
import {v4 as uuid} from 'uuid';

const AddItem = (props) => {
  const [newItem, setNewItem] = useState({});

  const handleTextChange = (e) => {
    setNewItem({
      item_id: uuid(),
      item_name: e.target.value,
      quantity: 1,
      category_name: props.cat
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem(newItem);
  }

  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <input 
          type="text"
          name="newItem"
          placeholder="new item"
          className="add-input"
          onChange={handleTextChange}
        />
        <button className="add-button" type="submit">ADD ITEM</button>
      </form>
    </div>
  );
}

export default AddItem;