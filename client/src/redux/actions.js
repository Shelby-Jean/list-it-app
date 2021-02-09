export const setUser = (user) => {
  return {
    type: "SET_USER",
    value: user
  }
}

// export const getList = async () => {
//   const categories = await fetch('/categories')
//     .then(response => response.json())
//     .then(data => {
//       return data
//     })
  
//   const items = await fetch('/items')
//     .then(response => response.json())
//     .then(data => {
//       return data
//     })

//     console.log(categories)
//     const categoriesList = categories.map(cat => {
//       return {
//         categoryName: cat.category_name,
//         categoryId: cat.category_id,
//         itemsList: [],
//       }
//     })

//     for(let i = 0; i < items.length; i++){
//       for(let y = 0; y < categoriesList.length; y++){
//         if(items[i].category_name === categoriesList[y].categoryName) {
//           categoriesList[i].itemsList.push(items[i]);
//         }
//       }
//     }

//     console.log(categoriesList);

//     const action = {
//       type: "GET_LIST",
//       value: categoriesList,
//     }

//     return (dispatch) => {
//       dispatch(action);
//     }
// }

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
  return {
    type: "ADD_ITEM",
    value: item
  }
}

export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    value: id
  }
}