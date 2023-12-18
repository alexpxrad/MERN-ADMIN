const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json()); // for parsing data from front end to back end

mongoose.connect(process.env.MONGODB_URI)

app.post("/createUser", (req, res) => {
        UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})
