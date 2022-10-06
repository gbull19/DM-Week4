const bcrypt = require("bcryptjs");
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body);
      const { username, password } = req.body;
      const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
      console.log(hashPassword);
      for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == hashPassword) {
          res.status(200).send(users[i]);
          console.table(users[i]);
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        const { password, firstName, lastName, email, username } = req.body;
        const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        let userObj = {
          username: `${username}`,
          firstName: `${firstName}`,
          lastName: `${lastName}`,
          email: `${email}`,
          password: hashPassword
        }
        console.log('Registering User');
        // console.table(userObj);
        users.push(userObj);
        console.table(users);
        delete userObj.password;
        // console.table(userObj);
        res.status(200).send(userObj);
    }
}