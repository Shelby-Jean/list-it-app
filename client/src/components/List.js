import React from 'react';
import Category from '../containers/Category';

class List extends React.Component {
  componentDidMount() {
    this.props.getItems();
    this.props.getCategories();
  }

  render() {
    return (
      <div className="list-container">
        <div className="list-header">
          <h3>Grocery List</h3>
        </div>
        <Category />
      </div>
    );
  }
}

export default List;