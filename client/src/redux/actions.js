export const setUser = (user) => {
  return {
    type: "SET_USER",
    value: user
  }
}

export const getCategories = () => {
  return (dispatch) => {
    fetch('/categories')
      .then(response => response.json())
      .then(data => {
        const action = {
          type: "GET_CATEGORIES",
          value: data
        }
        dispatch(action)
      })
  }
}

export const getItems = () => {
  return (dispatch) => {
    fetch('/items')
      .then(response => response.json())
      .then(data => {
        const action = {
          type: "GET_ITEMS",
          value: data
        }
        dispatch(action)
      })
  }
}

export const addItem = (item) => {
  return (dispatch) => {
    fetch('/items/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(data => {
        const action = {
          type: "ADD_ITEM",
          value: data
        }
        dispatch(action)
      })
  }
}


export const deleteItem = (id) => {
  return (dispatch) => {
    fetch(`/items/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: id
    })
      .then(response => response.json())
      .then(data => {
        const action = {
          type: "DELETE_ITEM",
          value: data
        }
        dispatch(action)
      })
  }

}