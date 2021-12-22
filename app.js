//imports
const express = require('express');
const app = express();
const userController = require('./controllers/UserController');
const PORT = 3000;

//listerner
app.use(express.json());
app.post('/adduser', userController.addUser);
app.get('/user', userController.getUsers);

app.listen(PORT, ()=> console.log("server is running on Port " + PORT));

