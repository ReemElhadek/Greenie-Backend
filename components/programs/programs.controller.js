const programModel = require('./programs.model');

const getAllProgramNames = async (req, res) => {
    try {
        var data = await programModel.find({},{name:1});
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

const getProgramById = async (req, res) => {
    try {
        var _id = req.params.id;
        var data = await programModel.findById({ _id });
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

const createNewProgram = async (req, res) => {
    try {
        var filteredData = {
            "name": req.body.name,
            "startAngle": req.body.startEndAngle.split(":")[0],
            "endAngle": req.body.startEndAngle.split(":")[1],
            "percentageOfSoilMoisture": req.body.percentageofsoilmoisture,
            "times": req.body.times
        };
        var data = await programModel.create(filteredData);
        res.status(200).json(filteredData);
    } catch (err) {
        res.status(400).json(err)
    }
}

const updateProgram = async (req, res) => {
    try {
        var _id = req.params.id;
        var newData = req.body;
        var data = await programModel.findByIdAndUpdate({ _id }, newData, { new: true })
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

const deleteProgram = async (req, res) => {
    try {
        var _id = req.params.id;
        var data = await programModel.findByIdAndDelete(_id);
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports = {
    getAllProgramNames,
    getProgramById,
    createNewProgram,
    updateProgram,
    deleteProgram
}