import { combineReducers } from 'redux';

const user = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.value;
    default:
      return state;
  }
}

const categories = (state = [], action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return action.value;
    default:
      return state;
  }
}

// const list = (state = [], action) => {
//   switch (action.type) {
//     case "GET_LIST":
//       console.log(action.value);
//       return action.value;
//     default:
//       return state;
//   }
// }

const items = (state = [], action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return action.value;
    case "ADD_ITEM":
      return [...state, action.value];
    case "DELETE_ITEM":
      const newState = [...state];
      const filteredState = newState.filter(item => item.item_id !== action.value)
      return filteredState;
    default:
      return state;
  }
}

export default combineReducers({ user, categories, items })