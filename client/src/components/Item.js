import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';

class Item extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quantity: 1
    }
  }

  decreaseQuantity = (id) => {
    if(this.state.quantity > 1){
      this.setState({
        quantity: this.state.quantity - 1
      })
      this.props.decreaseQuantity(id, this.state.quantity)
    }
  }

  increaseQuantity = (id) => {
    this.setState({
      quantity: this.state.quantity + 1
    })
    this.props.increaseQuantity(id, this.state.quantity)
  }

  render() {
    return (
        <div className="item-container"> 

          <div className="checkmark-name-container">
            <input className= "checkmark" type="checkbox"/>
            <p className="item-name">{this.props.itemName}</p>
          </div>

          <div className="quantity-delete-container">
            <div className="quantity-container">
              <AiOutlineMinusSquare onClick={() => this.decreaseQuantity(this.props.itemId)} />
              <p className="item-quantity">{this.props.quantity}</p>
              <AiOutlinePlusSquare onClick={() => this.increaseQuantity(this.props.itemId)} />
            </div>
            <BsTrash onClick={() => this.props.deleteItem(this.props.itemId)} />
          </div>

        </div>
    )
  }
}

export default Item;

