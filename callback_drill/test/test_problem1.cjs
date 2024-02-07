/*
    Problem 1:
    Using callbacks and the fs module's asynchronous functions, do the following:
    1. Create a directory of random JSON files
    2. Delete those files simultaneously 
*/

let output = require('../problem1.cjs');

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      postalCode: "12345"
    },
    hobbies: ["reading", "hiking", "cooking"],
    isStudent: false
};

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue",
    mileage: 15000,
    features: ["GPS", "Bluetooth", "Backup Camera"],
    owner: {
      name: "Alice",
      age: 35,
      location: "New York"
    }
};
  
const product = {
    name: "Smartphone",
    brand: "Samsung",
    model: "Galaxy S20",
    price: 799.99,
    inStock: true,
    specifications: {
      screenSize: "6.2 inches",
      camera: "64 MP",
      storage: "128 GB",
      RAM: "8 GB"
    },
    reviews: [
      { user: "User1", rating: 4.5, comment: "Great phone!" },
      { user: "User2", rating: 5, comment: "Excellent camera quality!" }
    ]
};

const person_path = './person.json';
const car_path = './car.json';
const product_path = './product.json';

output(person, car, product, person_path, car_path, product_path);