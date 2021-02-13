import { BsTrash } from 'react-icons/bs';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';

const Item = (props) => {
  return (
      <div className="item-container"> 

        <div className="checkmark-name-container">
          <input className= "checkmark" type="checkbox"/>
          <p className="item-name">{props.itemName}</p>
        </div>

        <div className="quantity-delete-container">
          <div className="quantity-container">
            <AiOutlineMinusSquare />
            <p className="item-quantity">{props.quantity}</p>
            <AiOutlinePlusSquare />
          </div>
          <BsTrash onClick={() => props.deleteItem(props.itemId)} />
        </div>

      </div>
  )
}

export default Item;

