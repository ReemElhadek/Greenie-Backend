const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
    {
        userRole:{
            type: String,
            enum: ["Owner","Engineer", "Admin"],
            required: [true, "please enter role of User"]
        },
        fName:{
            type:String,
            required: [true, 'Please provide an appropriate First Name'],
        },
        lName:{
            type:String,
            required: [true, 'Please provide an appropriate Last Name'],
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
        farms:{
            type: [
                new mongoose.Schema({
                farmIDs: {
                    type: mongoose.Types.ObjectId,
                    ref: 'farms',
                    required: true,
                },
                }),
            ]
        },
        timestamp: { type: Date, default: Date.now },
    })
module.exports = mongoose.model('users', usersSchema);
