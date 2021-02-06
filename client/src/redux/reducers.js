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
    default:
      return state;
  }
}

const items = (state = [{}], action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return {...state};
      case "ADD_ITEM":
      return action.value;
      case "DELETE_ITEM":
      return action.value;
    default:
      return state;
  }
}

export default combineReducers({ user, categories, items })