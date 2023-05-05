const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const sensorsSchema = new mongoose.Schema(
    {
        sensorType:{
            type: String,
            enum: ["DHT11","Soil Moisture"],
            required: [true, "please enter type of sensor"]
        },
        farmID:{
            type: ObjectId,
            required: [true,"please enter the farm"]
        },
        readings:{
            type: [
                new mongoose.Schema({
                pressure: {
                    type: Number,
                },
                temperature: {
                    type: Number,
                },
                soil_Moisture:{
                    type: Number,
                },
                timestamp: { type: Date, default: Date.now },
                }),
            ],
            default: [],
        },
        timestamp: { type: Date, default: Date.now },
    
    })
module.exports = mongoose.model('sensors', sensorsSchema);
