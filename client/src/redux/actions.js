import cookie from 'cookie';

const cookies = cookie.parse(document.cookie);
const headerToken = cookies["token"];

export const logIn = () => {
  return {
    type: "LOG_IN",
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

export const signUp = (user) => {
  return (dispatch) => {
    fetch('/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const action = {
        type: "SIGN_UP",
        value: data
      }
      dispatch(action)
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  }
};

export const getCategories = () => {
  return (dispatch) => {
    fetch('/categories', {
      headers: {
        'authorization': 'Bearer ' + headerToken
      }
    })
      .then(response => response.json())
      .then(data => {
        const action = {
          type: "GET_CATEGORIES",
          value: data
        }
        dispatch(action)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
};

export const getItems = () => {
  return (dispatch) => {
    fetch('/items', {
      headers: {
        'authorization': 'Bearer ' + headerToken
      }
    })
      .then(response => response.json())
      .then(data => {
        const action = {
          type: "GET_ITEMS",
          value: data
        }
        dispatch(action)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
};

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
      .catch((error) => {
        console.error('Error:', error);
      });
  }
};

export const deleteItem = (id) => {
  return (dispatch) => {
    fetch(`/items/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        const action = {
          type: "DELETE_ITEM",
          value: data
        }
        dispatch(action)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
};

export const decreaseQuantity = (updatedItem) => {
  return (dispatch) => {
    fetch(`/items/updatequantity/${updatedItem.item_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedItem)
    })
      .then(response => response.json())
      .then(data => {
        const action = {
          type: "DECREASE_QUANTITY",
          value: data
        }
        dispatch(action)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
};

export const increaseQuantity = (updatedItem) => {
  return (dispatch) => {
    fetch(`/items/updatequantity/${updatedItem.item_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedItem)
    })
      .then(response => response.json())
      .then(data => {
        const action = {
          type: "INCREASE_QUANTITY",
          value: data
        }
        dispatch(action)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
};

export const updateChecked = (updatedItem) => {
  return (dispatch) => {
    fetch(`/items/updatechecked/${updatedItem.item_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedItem)
    })
      .then(response => response.json())
      .then(data => {
        const action = {
          type: "UPDATE_CHECKED",
          value: data
        }
        dispatch(action)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
};