const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    department: String,
})

const UserModel = mongoose.model('users', UserSchema); //2 properteries: name of model and schema
module.exports = UserModel; //exporting the model