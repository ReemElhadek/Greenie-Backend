const mongoose = require('mongoose');

const sensorsSchema = new mongoose.Schema(
    {
        sensorType:{
            type: String,
            enum: ["DHT11","Soil Moisture"],
            required: [true, "please enter type of sensor"]
        },
        readings:{
            type: [
                new mongoose.Schema({
                pressure: {
                    type: Number,
                    required: true,
                },
                Temperature: {
                    type: Number,
                    required: true,
                },
                Soil_Moisture:{
                    type: Number,
                    required: true,
                },
                
                }),
            ],
            default: [],
        },
        timestamp: { type: Date, default: Date.now },
    
    })
module.exports = mongoose.model('sensors', sensorsSchema);
