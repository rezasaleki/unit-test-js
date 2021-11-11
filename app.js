const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');

const PORT = 3000;
const HOST = 'localhost';
const users = [{ id: 10004123, name: 'reza', username: 'reskipper', email: 'rezasaleki.09@gmail.com' }];

const server = http.createServer(app);

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
});

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
});

server.listen(PORT, HOST,1, ()=> {
    console.log(`server running: http://${HOST}:${PORT}`);
});

module.exports = app;