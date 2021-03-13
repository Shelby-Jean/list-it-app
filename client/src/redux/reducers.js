import { combineReducers } from 'redux';

const users = (state = [], action) => {
  switch (action.type) {
    case "SIGN_UP":
      return action.value;
    case "LOG_IN":
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
      const filteredState = newState.filter(item => item.item_id !== parseInt(action.value.item_id));
      return filteredState;
    case "DECREASE_QUANTITY":
      console.log(action.value, state);
      return state;
    default:
      return state;
  }
}

export default combineReducers({ users, categories, items })