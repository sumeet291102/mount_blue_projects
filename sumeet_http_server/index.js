const http = require('http');
const fs = require('fs');
const uuid = require('uuid');

const server = http.createServer((req, res) => {
    const path = req.url;
    if(path === '/html') {
        fs.readFile('./index.html', function (error, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    else if(path === '/json') {
        fs.readFile('./data.json', function (error, data) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(data);
        });
    }
    else if(path === '/uuid') {
        res.end(uuid.v4())
    }
    else if(path.split('/')[1]=='status') {
        res.end(`status code: ${path.split('/')[2]}`);
    }
    else if(path.split('/')[1]=='delay') {
        setTimeout(() => {
            res.end('success');
        },parseInt(path.split('/')[2])*1000);
    }
    else {
        console.log(path);
        res.end('hi');
    }
});

server.listen("3000", '127.0.0.1', () => {
    console.log('success');
})