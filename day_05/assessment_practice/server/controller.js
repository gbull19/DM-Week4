const list = []; // Fake db
let globalId = 1;

module.exports = {
    getItems: (req, res) => {
        res.status(200).send(list);
    },
    deleteItem: (req, res) => {
        const { id } = req.params;
        const delItem = list.find((obj) => obj.id === Number(id));
        list.splice(id -1, 1);
        console.table(list);
        res.status(200).send(list);
    },
    addItem: (req, res) => {
        let newItem = {
            id: globalId,
            name: req.body.name,           
            quantity: req.body.quantity 
        };
        list.push(newItem);
        globalId++;
        res.status(200).send(list);
    },
    updateItem: (req, res) => {
        const { id } = req.params;
        const { type } = req.body;
        const updateQuantity = list.findIndex((obj) => obj.id === Number(id));
        if (type === "plus") {
            list[updateQuantity].quantity += 1;
        } else {
            if ((list[updateQuantity].quantity) > 0) {
                list[updateQuantity].quantity -= 1;
            } else {
                list[updateQuantity].quantity = 0;
            }
        }
        res.status(200).send(list);
    }
}
