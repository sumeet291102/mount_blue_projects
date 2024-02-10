/*
    Problem 1:
    Using callbacks and the fs module's asynchronous functions, do the following:
    1. Create a directory of random JSON files
    2. Delete those files simultaneously 
*/

const fs = require('fs');


let output = (person, car, product, person_path, car_path, product_path) => {
    
    new Promise((resolve, reject) => {
        fs.writeFile(person_path, JSON.stringify(person), err => {
            if(err) reject(err);
            else resolve('successfully created person.json file');
        })
    })
    .then((msg) => {
        console.log(msg);
        fs.unlink(person_path, err => {
            if(err) console.log(err);
            else console.log('successfully deleted person.json file');
        })
    })
    .catch((err) => {
        console.log(err);
    })

    new Promise((resolve, reject) => {
        fs.writeFile(car_path, JSON.stringify(car), err => {
            if(err) reject(err);
            else resolve('successfully created car.json file');
        })
    })
    .then((msg) => {
        console.log(msg);
        fs.unlink(car_path, err => {
            if(err) console.log(err);
            else console.log('successfully deleted car.json file');
        })
    })
    .catch((err) => {
        console.log(err);
    })

    new Promise((resolve, reject) => {
        fs.writeFile(product_path, JSON.stringify(product), err => {
            if(err) reject(err);
            else resolve('successfully created product.json file');
        })
    })
    .then((msg) => {
        console.log(msg);
        fs.unlink(product_path, err => {
            if(err) console.log(err);
            else console.log('successfully deleted product.json file');
        })
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = output;