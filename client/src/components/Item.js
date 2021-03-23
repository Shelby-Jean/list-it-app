import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';

class Item extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quantity: this.props.quantity,
      checked: this.props.checked
    }
  }

  decreaseQuantity = (id) => {
    if(this.state.quantity > 1){
      this.setState({
        quantity: this.state.quantity - 1
      }, () => {
        const updatedItem = {
          item_id: id,
          item_name: this.props.itemName,
          quantity: this.state.quantity,
          checked: this.props.checked,
          category_id: this.props.catId
        };
        this.props.decreaseQuantity(updatedItem);
      });
    };
  }

  increaseQuantity = (id) => {
    this.setState({
      quantity: this.state.quantity + 1
    }, () => {
      const updatedItem = {
        item_id: id,
        item_name: this.props.itemName,
        quantity: this.state.quantity,
        checked: this.props.checked,
        category_id: this.props.catId
      };
      this.props.increaseQuantity(updatedItem);
    });
  }

  updateChecked = (id) => {
    this.setState({
      checked: !this.state.checked 
    }, () => {
      const updatedItem = {
        item_id: id,
        item_name: this.props.itemName,
        quantity: this.props.quantity,
        checked: this.state.checked,
        category_id: this.props.catId
      };
      this.props.updateChecked(updatedItem);
    });
  }

  render() {
    return (
        <div className="item-container"> 

          <div className="checkmark-name-container">
            <input className="checkmark" type="checkbox" checked={this.state.checked} onChange={() => this.updateChecked(this.props.itemId)} />
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

