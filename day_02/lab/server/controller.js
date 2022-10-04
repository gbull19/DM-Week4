const { SocketAddress } = require("net");
const houses = require("./db.json");
let globalId = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        const { id } = req.params;
        const dltHouse = houses.find((obj) => obj.id === Number(id));
        houses.splice(id -1, 1);
        console.log(houses);
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        let crtHouse = {
            id: globalId,            
            address: req.body.address, 
            price: req.body.price, 
            imageURL: req.body.imageURL 
        };
        houses.push(crtHouse);
        globalId++;
        res.status(200).send(houses);
    },
    updateHouse: (req, res) => {
        const { id } = req.params;
        const { type } = req.body;
        const updtIndex = houses.findIndex((obj) => obj.id === Number(id));
        if (type === "plus") {
            houses[updtIndex].price += 10000;
        } else {
            if ((houses[updtIndex].price) > 0) {
                houses[updtIndex].price -= 10000;
            } else {
                houses[updtIndex].price = 0;
            }
        }
        res.status(200).send(houses);
    }
}
