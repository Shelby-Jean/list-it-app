import { BsTrash } from 'react-icons/bs';

const Item = (props) => {
  return (
    <div className="item-container">  
      <input className= "checkmark" type="checkbox"/>
      <p className="item-name">name</p>
      <p className="item-quantity">quantity</p>
      <BsTrash />
    </div>
  )
}

export default Item;