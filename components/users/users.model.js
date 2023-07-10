const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
    {
        uName:{
            type:String,
            required: [true, 'Please provide an appropriate your Name'],
        },
        email:{
            type:String,
            required: [true, 'Please provide an appropriate Email'],
        },
        password:{
            type:String,
            minLength: [6, 'Enter a password no less than 6 characters'],
            required: [true, 'Please provide an appropriate password'],
        },
        fName:{
            type:String,
            required: [true, 'Please provide an appropriate farm Name'],
        },

        fLocation:{
            type:String,
            required: [true, 'Please enter your farm location'],
        },
    
        userRole:{
            type: String,
            enum: ["Owner","Engineer"],
            // required: [true, "please enter role of User"]
        },
    timestamp: { type: Date, default: Date.now },
    })
module.exports = mongoose.model('users', usersSchema);
