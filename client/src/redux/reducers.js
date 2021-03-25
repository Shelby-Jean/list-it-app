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
      const indexUpdated = state.findIndex(item => item.item_id === parseInt(action.value.item_id));
      const updatedItem = {...action.value, quantity: action.value.quantity};
      return [
        ...state.slice(0, indexUpdated),
        updatedItem,
        ...state.slice(indexUpdated + 1)
      ];
    case "INCREASE_QUANTITY":
      const indexU = state.findIndex(item => item.item_id === parseInt(action.value.item_id));
      const uItem = {...action.value, quantity: action.value.quantity};
      return [
        ...state.slice(0, indexU),
        uItem,
        ...state.slice(indexU + 1)
      ];
    case "UPDATE_CHECKED":
      console.log(action.value);
    default:
      return state;
  }
}

export default combineReducers({ users, categories, items })