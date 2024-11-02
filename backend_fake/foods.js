const foods = [
  {
    "id": 1,
    "imageUrl": "https://picsum.photos/200/300",
    "name": "Grilled Chicken Salad",
    "price": "$12.50"
  },
  {
    "id": 2,
    "imageUrl": "https://picsum.photos/200/300",
    "name": "Beef Burger",
    "price": "$8.75"
  },
  {
    "id": 3,
    "imageUrl": "https://picsum.photos/200/300",
    "name": "Spaghetti Carbonara",
    "price": "$10.00"
  },
  {
    "id": 4,
    "imageUrl": "https://picsum.photos/200/300",
    "name": "Sushi Platter",
    "price": "$18.20"
  },
  {
    "id": 5,
    "imageUrl": "https://picsum.photos/200/300",
    "name": "Vegetable Stir Fry",
    "price": "$7.30"
  },
  {
    "id": 6,
    "imageUrl": "https://picsum.photos/200/300",
    "name": "Margherita Pizza",
    "price": "$9.50"
  },
  {
    "id": 7,
    "imageUrl": "https://picsum.photos/200/300",
    "name": "Tacos",
    "price": "$5.95"
  },
  {
    "id": 8,
    "imageUrl": "https://picsum.photos/200/300",
    "name": "Caesar Salad",
    "price": "$6.80"
  },
  {
    "id": 9,
    "imageUrl": "https://picsum.photos/200/300",
    "name": "Chicken Wrap",
    "price": "$7.00"
  },
  {
    "id": 10,
    "imageUrl": "https://picsum.photos/200/300",
    "name": "Pad Thai",
    "price": "$8.50"
  }
]

function getListFood() {
  return [...foods]
}

function getFoodById(id) {
  return foods.find(food => food.id === Number(id))
}

module.exports = {
  getFoodById,
  getListFood
}