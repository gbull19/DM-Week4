const express = require('express');
const server = express();
const PORT = 3000

server.use(express.json());

server.get("/", (req, res) => {
    console.log(req.query);
    res.send("hello");
});

server.get('/:wildcard', function (req, res) {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    res.send("Hello World");
})

server.listen(PORT, () => {
    console.log(`Running in the 90's but on port ${PORT}.`)
});