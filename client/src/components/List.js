import React from 'react';
import Category from '../containers/Category';

class List extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  componentDidMount() {
    this.props.getItems();
    this.props.getCategories();
  }

  render() {
    console.log(this);
    return (
      <div className="list-container">
        <div className="list-header">
          <h3>Grocery List</h3>
        </div>
        {this.props.categories.map(category => {
          return <Category catName={category.category_name} catId={category.category_id} />
        })}
      </div>
    );
  }
}

export default List;