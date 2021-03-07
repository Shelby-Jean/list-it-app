import cookie from 'cookie';

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
}

const getToken = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["token"];
}

export const logIn = (user) => {
  return (dispatch) => {
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': getToken()
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
      const action = {
        type: "LOG_IN",
        value: data
      }
      dispatch(action)
    })
    .catch((error) => {
      console.log('Error:', error);
    });
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
      .catch((error) => {
        console.error('Error:', error);
      });
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
      .catch((error) => {
        console.error('Error:', error);
      });
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
      .catch((error) => {
        console.error('Error:', error);
      });
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
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

export const decreaseQuantity = () => {

}

export const increaseQuantity = () => {
  
}