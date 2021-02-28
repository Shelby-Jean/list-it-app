import { combineReducers } from 'redux';

const users = (state = [], action) => {
  switch (action.type) {
    case "SIGN_UP":
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

export default combineReducers({ users, categories, items })