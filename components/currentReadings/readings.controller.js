const ReadingsSchema = require('./readings.model');
const axios = require('axios');
const headers = {
    'X-AIO-Key': 'aio_XqfY83iNq6NEvR3jJhYicvRWCYIO',
    'Content-Type': 'application/json'
};

//show all readings 

const GetAllReadings = async (req, res) => {
    try {
        var data = await ReadingsSchema.find();
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

//get last value temp

const GetLastReadings = async (req, res) => {
    try {
        const responseTemp = await axios.get('https://io.adafruit.com/api/v2/Nada_Essam/feeds?x-aio-key=aio_XqfY83iNq6NEvR3jJhYicvRWCYIO/data/last', { headers });
        var responseTempData = responseTemp.data;
        let handledRes = await handleResponse(responseTempData);
        ReadingsSchema.create(handledRes);
        res.json(handledRes);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
};

const handleResponse = async (response) => {
    let temperature, humidity, soilMoisture1, soilMoisture2, systemMod, stopSystem, motorsOn;

    let temp = await response.find(o =>
        o.name === 'Temperature'
    );
    let hum = await response.find(o =>
        o.name === 'Humidity'
    );
    let Soil1 = await response.find(o =>
        o.name === 'SoilMoisture'
    );
    let Soil2 = await response.find(o =>
        o.name === 'SoilMoisture1'
    );
    let mod = await response.find(o =>
        o.name === 'SytemMod'
    );
    let stop = await response.find(o =>
        o.name === 'StopSytm'
    );
    let motor = await response.find(o =>
        o.name === 'MotorsOn'
    );

    temperature = temp.last_value;
    humidity = hum.last_value;
    soilMoisture1 = Soil1.last_value;
    soilMoisture2 = Soil2.last_value;
    systemMod = mod.last_value;
    stopSystem = stop.last_value;
    motorsOn = motor.last_value;


    return { temperature, humidity, soilMoisture1, soilMoisture2, systemMod, stopSystem, motorsOn };
}

//show reading by id

const GetReadingsById = async (req, res) => {
    try {
        let _id = req.params.id;
        let data = await ReadingsSchema.findById({ _id });
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

//get location

var getLocation = async (req, res) => {
    try {
        var data = await ReadingsSchema.find();
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}
//store location
var storeLocation = async (req, res) => {
    try {
        var data = await ReadingsSchema.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}
//get plant
var getPlant = async (req, res) => {
    try {
        var data = await ReadingsSchema.find();
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}
//store plant 
var storePlant = async (req, res) => {
    try {
        var data = await ReadingsSchema.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}
//delete readings

var DeleteReadings = async (req, res) => {
    try {
        var _id = req.params.id;
        var data = await ReadingsSchema.findByIdAndDelete(_id);
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports = {
    GetAllReadings,
    GetReadingsById,
    DeleteReadings,
    GetLastReadings
}