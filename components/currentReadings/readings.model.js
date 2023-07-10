const mongoose = require('mongoose');

const ReadingsSchema = new mongoose.Schema(
    {
        Temperature: {type:Number},
        Humidity: {type:Number},
        soilMoisture1: { type: Number },
        soilMoisture2: { type: Number },
        systemMod: { type: String },
        stopSystem: { type: String },
        motorsOn: {type: Number}
    })
module.exports = mongoose.model('Readings', ReadingsSchema);
