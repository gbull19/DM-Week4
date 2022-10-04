const express = require('express');
const server = express();
const PORT = 3000

server.use(express.json())
// CRUD
// reading --> server.get
// creating --> server.post
// updating --> server.put
// deleting --> server.delete
// Our fake database
const magic_set = [
    { id: 1, set_name: "KTK"},
    { id: 2, set_name: "2X2"},
    { id: 3, set_name: "RAV"},
]

server.get("/api/sets", (req, res) => {
    res.status(200).json(magic_set);
});

server.post("/api/sets", (req, res) => {
    console.log(req.body);
    const set_to_add = {
        id: req.body.id,
        set_name: req.body.set_name
    };
    magic_set.push(set_to_add);
    res.status(200).json("success", magic_set);
});

server.put("/api/sets/:id", (req, res) => {
    // console.log(req.body);
    // destructure ID from params
    const { id } = req.params; // Data from params will always be string
    // finding the set we want to update
    const set_to_update = magic_set.find((set_obj) => set_obj.id === Number(id));
    //setting the name field with the body data the user sent
    set_to_update.set_name = req.body.set_name;
    // console.log(magic_set)
    res.send("wow you're requesting an update");
})

server.delete("/api/sets/:id", (req, res) => {
    const { id } = req.params;
    const set_to_delete = magic_set.find((set_obj) => set_obj.id === Number(id));
    magic_set.splice(id -1, 1)
    console.log(magic_set);
    res.send("wow you're deleting an object");
})

server.listen(PORT, () => {
    console.log(`Running on port ${PORT}.`)
});