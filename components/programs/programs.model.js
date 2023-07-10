const mongoose = require('mongoose');

const programsSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "please enter an appropriate name"]
        },
        water:{
            type: Number,
            required: [true, "please enter amount of water"]
        },
        motorSpeed:{
            type:Number,
            required: [true, 'Please provide an appropriate Motor Speed'],
        },
        startAngle:{
            type:Number,
            default: 0
        },
        endAngle:{
            type:Number,
            required: [true, 'Please provide an appropriate End Angle'],
        },
        times:{
            type:Number,
            required: [true, 'Please provide the number of times'],
            minLength: 1,
            maxLength: 4,
        },
        ftotd:{  //First time of the day
            type: String,
            default: "6 am",
        },
        hours:{
            type:[
                Number
            ]
        },
        timestamp: { type: Date, default: Date.now },
    })
module.exports = mongoose.model('programs', programsSchema);
