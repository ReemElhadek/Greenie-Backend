const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema(
    {
        farmName:{
            type: String,
            required: [true,"enter the farm name"]
        },
        location:{
            type: String,
            required: [true,"enter the farm name"]
        },
        timestamp: { type: Date, default: Date.now },
    
    })
module.exports = mongoose.model('farms', farmSchema);
