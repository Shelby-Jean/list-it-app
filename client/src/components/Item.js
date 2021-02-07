import { BsTrash } from 'react-icons/bs';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';

const Item = (props) => {


  return (
    props.items.map(item => (
      <div className="item-container" key={item.item_id}> 

        <div className="checkmark-name-container">
          <input className= "checkmark" type="checkbox"/>
          <p className="item-name">{item.item_name}</p>
        </div>

        <div className="quantity-delete-container">
          <div className="quantity-container">
            <AiOutlineMinusSquare />
            <p className="item-quantity">{item.quantity}</p>
            <AiOutlinePlusSquare />
          </div>
          <BsTrash onClick={() => props.deleteItem(item.item_id)} />
        </div>

      </div>
    ))
  )
}

export default Item;

