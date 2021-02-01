export default {
  user: {
    username: "",
    password: ""
  },
  groceryList: {
    sublists: [
      {
        id: 111,
        name: 'Produce',
        numOfItems: 4,
        items: [
          { 
            item_id: 1,
            name: 'apples',
            quantity: 3,
            list_id: 0
          },
          { 
            item_id: 2,
            name: 'asparagus',
            quantity: 1,
            list_id: 0
          },
          { 
            item_id: 3,
            name: 'broccoli',
            quantity: 2,
            list_id: 0
          },
          { 
            item_id: 4,
            name: 'bananas',
            quantity: 1,
            list_id: 0
          },
        ]
      },
      {
        id: 222,
        name: 'Dairy',
        numOfItems: 1,
        items: [
          { 
            item_id: 5,
            name: 'milk',
            quantity: 1,
            list_id: 1
          }
        ]
      },
      {
        id: 333,
        name: 'Bakery',
        numOfItems: 3,
        items: [
          { 
            item_id: 6,
            name: 'bread',
            quantity: 1,
            list_id: 2
          },
          { 
            item_id: 7,
            name: 'muffins',
            quantity: 3,
            list_id: 2
          },
          { 
            item_id: 8,
            name: 'cookies',
            quantity: 1,
            list_id: 2
          },
        ]
      },
    ],
  }
}