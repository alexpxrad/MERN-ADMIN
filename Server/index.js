const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json()); // for parsing data from front end to back end

mongoose.connect(process.env.MONGODB_URI)

app.get("/", (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})



app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {
        name: req.body.name, 
        surname: req.body.surname, 
        email: req.body.email, 
        department: req.body.department})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post("/createUser", (req, res) => {
        UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})
