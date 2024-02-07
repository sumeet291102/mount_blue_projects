/*
Folder structure:
    ├── problem1.cjs
    ├── problem2.cjs
    └── test
    ├── testProblem1.cjs
    └── testProblem2.cjs
*/

/*
    Problem 1:
    Using callbacks and the fs module's asynchronous functions, do the following:
    1. Create a directory of random JSON files
    2. Delete those files simultaneously 
*/

const obj1 = {
    "sumeet": "sde"
}

const obj2 = {
    "nitin": "sde"
}

const obj3 = {
    "subhadeep": "sde"
}

const path1 = './sum.json';
const path2 = './nit.json';
const path3 = './sub.json';

fs.writeFile(path1, JSON.stringify(obj1), err => {
    if(err) console.log(err);
    else {
        console.log('success f1');
        fs.unlink(path1, err => {
            if(err) console.log(err);
            else console.log('successfully deleted f1');
        })
    }
})

fs.writeFile(path2, JSON.stringify(obj2), err => {
    if(err) console.log(err);
    else {
        console.log('success f2');
        fs.unlink(path2, err => {
            if(err) console.log(err);
            else console.log('successfully deleted f2');
        })
    }
})

fs.writeFile(path3, JSON.stringify(obj3), err => {
    if(err) console.log(err);
    else {
        console.log('success f3');
        fs.unlink(path3, err => {
            if(err) console.log(err);
            else console.log('successfully deleted f3');
        })
    }
})

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
const path = '/home/sumeet291102/projects/project/callback_drill/';
const store_file_name = 'filename.txt';

fs.readFile(path+'lipsum_1.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);

    fs.writeFile(path+'file1.txt', data.toUpperCase(), err => {
        if(err) throw err;

        fs.appendFile(path+store_file_name, 'file1.txt ', err => {
            if(err) throw err;

            fs.readFile(path+'file1.txt', 'utf8', (err, data) => {
                if (err) throw err;
                console.log(data);

                let sentences = data.toLowerCase().split('.');
                let sentences_string = "";
                sentences.forEach(sentence => sentences_string+=sentence+'\n');

                fs.writeFile(path+'file2.txt', sentences_string, err => {
                    if(err) throw err;
            
                    fs.appendFile(path+store_file_name, 'file2.txt ', err => {
                        if(err) throw err;
            
                        fs.readFile(path+'file2.txt', 'utf8', (err, data) => {
                            if (err) throw err;
                            console.log(data);
                        
                            fs.writeFile(path+'file3.txt', data.split('').sort().join(''), err => {
                                if(err) throw err;
                        
                                fs.appendFile(path+store_file_name, 'file3.txt ', err => {
                                    if(err) throw err;
                        
                                    fs.readFile(path+store_file_name, 'utf8', (err, data) => {
                                        if (err) throw err;

                                        let file_names = data.split(' ');
                                        file_names.pop();

                                        file_names.forEach(file_name => {
                                            fs.unlink(path+file_name, err => {
                                                if (err) throw err;
                                                
                                                console.log('success');
                                            })
                                        })

                                        fs.unlink(path+store_file_name, err => {
                                            if (err) throw err;

                                            console.log('completed');
                                        })

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})


