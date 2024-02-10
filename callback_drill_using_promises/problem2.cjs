/*
    Problem 2:

    Using callbacks and the fs module's asynchronous functions, do the following:
    1. Read the given file lipsum.txt
    2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
    3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
    4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
    5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

const fs = require('fs');

const output = (store_file_name) => {

    new Promise((resolve, reject) => {
        fs.readFile('./lipsum_1.txt', 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    })
    .then(data => {
        console.log(data);

        return new Promise((resolve, reject) => {
            fs.writeFile('./file1.txt', data.toUpperCase(), err => {
                if(err) reject(err);
                else resolve('success');
            })
        })
    })
    .then(data => {
        console.log(data);

        return new Promise((resolve, reject) => {
            fs.appendFile(store_file_name, './file1.txt ', err => {
                if(err) reject(err);
                else resolve('success');
            })
        })
    })
    .then(data => {
        console.log(data);

        return new Promise((resolve, reject) => {
            fs.readFile('./file1.txt', 'utf8', (err, data) => {
                if (err) reject(err);
                else resolve(data);
            })
        })
    })
    .then(data => {
        console.log(data);
        
        let sentences = data.toLowerCase().split('.');
        let sentences_string = "";
        sentences.forEach(sentence => sentences_string+=sentence+'\n');

        return new Promise((resolve, reject) => {
            fs.writeFile('./file2.txt', sentences_string, err => {
                if(err) reject(err);
                else resolve('success');
            })
        })
    })
    .then(data => {
        console.log(data);

        return new Promise((resolve, reject) => {
            fs.appendFile(store_file_name, './file2.txt ', err => {
                if(err) reject(err);
                else resolve('success');
            })
        })
    })
    .then(data => {
        console.log(data);

        return new Promise((resolve, reject) => {
            fs.readFile('./file2.txt', 'utf8', (err, data) => {
                if (err) reject(err);
                else resolve(data);
            })
        })
    })
    .then(data => {
        console.log(data);

        return new Promise((resolve, reject) => {
            fs.writeFile('./file3.txt', data.split('').sort().join(''), err => {
                if(err) reject(err);
                else resolve('success');
            })
        })
    })
    .then(data => {
        console.log(data);

        return new Promise((resolve, reject) => {
            fs.appendFile(store_file_name, './file3.txt ', err => {
                if(err) reject(err);
                else resolve('success');
            })
        })
    })
    .then(data => {
        console.log(data);

        fs.readFile(store_file_name, 'utf8', (err, data) => {
            if (err) throw err;

            let file_names = data.split(' ');
            file_names.pop();

            file_names.forEach(file_name => {
                fs.unlink(file_name, err => {
                    if (err) throw err;
                    
                    console.log('success');
                })
            })

            fs.unlink(store_file_name, err => {
                if (err) throw err;

                console.log('completed');
            })
        })
    })
    .catch(err => {
        console.log(err);
    }) 
}                
                                       
module.exports = output;
