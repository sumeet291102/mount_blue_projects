/*
    Problem 1:
    Using callbacks and the fs module's asynchronous functions, do the following:
    1. Create a directory of random JSON files
    2. Delete those files simultaneously 
*/

const fs = require('fs');

let output = (person, car, product, person_path, car_path, product_path) => {

    fs.writeFile(person_path, JSON.stringify(person), err => {
        if(err) console.log(err);
        else {
            console.log('successfully created person.json file');
            fs.unlink(person_path, err => {
                if(err) console.log(err);
                else console.log('successfully deleted person.json file');
            })
        }
    })
    
    fs.writeFile(car_path, JSON.stringify(car), err => {
        if(err) console.log(err);
        else {
            console.log('successfully created car.json file');
            fs.unlink(car_path, err => {
                if(err) console.log(err);
                else console.log('successfully deleted car.json file');
            })
        }
    })
    
    fs.writeFile(product_path, JSON.stringify(product), err => {
        if(err) console.log(err);
        else {
            console.log('successfully created product.json file');
            fs.unlink(product_path, err => {
                if(err) console.log(err);
                else console.log('successfully deleted product.json file');
            })
        }
    })
}

module.exports = output;