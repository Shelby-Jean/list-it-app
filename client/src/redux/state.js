export default {
  user: {
    username: "",
    password: ""
  },
  groceryList: {
    sublists: [
      {
        id: 0,
        name: 'Produce',
        numOfItems: 4,
        items: [
          { 
            name: 'apples',
            quantity: 3,
            list_id: 0
          },
          { 
            name: 'asparagus',
            quantity: 1,
            list_id: 0
          },
          { 
            name: 'broccoli',
            quantity: 2,
            list_id: 0
          },
          { 
            name: 'bananas',
            quantity: 1,
            list_id: 0
          },
        ]
      },
      {
        id: 1,
        name: 'Dairy',
        numOfItems: 1,
        items: [
          { 
            name: 'milk',
            quantity: 1,
            list_id: 1
          }
        ]
      },
      {
        id: 2,
        name: 'Bakery',
        numOfItems: 3,
        items: [
          { 
            name: 'bread',
            quantity: 1,
            list_id: 2
          },
          { 
            name: 'muffins',
            quantity: 3,
            list_id: 2
          },
          { 
            name: 'cookies',
            quantity: 1,
            list_id: 2
          },
        ]
      },
    ],
  }
}