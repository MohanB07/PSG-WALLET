const mongoose = require('mongoose')


const User = new mongoose.Schema({
        id:{
        type: String,
        required: true
        },
        password:{
        type: String,
        required: true
        },
        name: {
        type:String,
        required: true}
})

module.exports = mongoose.model('User', User)
