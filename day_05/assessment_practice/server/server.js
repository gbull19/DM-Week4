const express = require("express");
const cors = require("cors");
const server = express();
server.use(express.json());
server.use(cors());
const PORT = 3000;

const {
    getItems,
    addItem,
    updateItem,
    deleteItem
} = require("./controller")

server.get("/api/list", getItems);
server.post("/api/list", addItem);
server.put("/api/list/:id", updateItem);
server.delete("/api/list/:id", deleteItem);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
});