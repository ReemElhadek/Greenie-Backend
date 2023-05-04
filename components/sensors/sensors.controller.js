const sensorModel = require('./sensors.model');

var getAllSensors = async (req, res) => {
    try {
        var data = await sensorModel.find();
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

var getSensorById = async (req, res) => {
    try {
        var _id = req.params.id;
        var data = await sensorModel.findById({ _id });
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

var createNewSensor = async (req, res) => {
    try {

        var data = await timestamp.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err)
    }
}

var updateSensor = async (req, res) => {
    try {
        var _id = req.params.id;
        var newData = req.body;
        var data = await sensorModel.findByIdAndUpdate({ _id }, newData, { new: true })
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

var deleteSensor = async (req, res) => {
    try {
        var _id = req.params.id;
        var data = await sensorModel.findByIdAndDelete(_id);
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports = {
    getAllSensors,
    getSensorById,
    createNewSensor,
    updateSensor,
    deleteSensor
}