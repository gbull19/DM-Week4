const list = require("./controller");
const form = document.querySelector('form');

const baseURL = `http://localhost:3000/api/list`

const listDisplay = document.getElementById('#listDisplay')

const addEvent = () => {
    
}

const getList = () => axios.get(baseURL)
    .then(housesCallback)
    .catch(errCallback);

const addItem = body => axios.post(baseURL, body)
    .then(housesCallback)
    .catch(errCallback)

const deleteItem = id => axios.delete(`${baseURL}/${id}`)
    .then(housesCallback)
    .catch(errCallback)

const updateItem = (id, type) => axios.put(`${baseURL}/${id}`, {type})
    .then(housesCallback)
    .catch(errCallback)

form.addEventListener('submit', addEvent)

document.getElementById("#listDisplay").onload = function() {getList()};