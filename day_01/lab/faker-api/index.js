import { faker } from '@faker-js/faker';
import express from 'express';

const server = express();
server.use(express.json());
const PORT = 3000

server.get("/", (req, res) => {
    console.log(req.query);
    res.send("LeBron is The Faker");
});

class User{
    constructor() {
        this._id= faker.datatype.uuid(),
        this.firstName= faker.name.firstName()
    }
}

server.get("/api/users/new", (req, res) => {
    let newUser = new User();
    res.status(200).send({newUser});
});

server.get("/api/companies/new", (req, res) => {
    const randomCompany = faker.company.name();
    res.status(200).send(randomCompany);
});

server.get("/api/user/company", (req, res) => {
    const randoName = faker.name.fullName();
    const randoCompany = faker.company.name();
    res.status(200).send(`Name: ${randoName}, Company: ${randoCompany}`);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
});

// We will be using faker to create random endpoints. above I have some code to help you get started in the assignment
// I want you to make this file into a server file and create me 3 endpoints

// Create an api route "/api/users/new" that returns a new user 

// Create an api route "/api/companies/new" that returns a new company

// Create an api route "/api/user/company" that returns both a new user and a new company