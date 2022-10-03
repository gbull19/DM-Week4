const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 4000

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h1>It was ${temperature} today.</h1>`;
    res.status(200).send(phrase);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
});