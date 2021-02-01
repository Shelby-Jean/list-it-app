export const setUser = (user) => {
  return {
    type: "SET_USER",
    value: user
  }
}

export const getItems = () => {
  return {
    type: "GET_ITEMS"
  }
}

export const AddItem = (item) => {
  return {
    type: "ADD_ITEM",
    value: item
  }
}

export const DELETEItem = (item) => {
  return {
    type: "DELETE_ITEM",
    value: item
  }
}