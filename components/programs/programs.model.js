const mongoose = require('mongoose');

const programsSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "please enter an appropriate name"]
        },
        startAngle:{
            type:Number,
            required: [true, 'Please provide an appropriate Start Speed']
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
        percentageOfSoilMoisture:{  
            type: String,
            required: [true, 'Please provide the percentage Of Soil Moisture Needed'],
        },
        hours:{
            type:[
                Number
            ]
        },
        timestamp: { type: Date, default: Date.now },
    })
module.exports = mongoose.model('programs', programsSchema);
