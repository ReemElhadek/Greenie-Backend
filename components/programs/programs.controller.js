const programModel = require('./programs.model');

var getAllPrograms = async (req, res) => {
    try {
        var data = await programModel.find();
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

var getProgramById = async (req, res) => {
    try {
        var _id = req.params.id;
        var data = await programModel.findById({ _id });
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

var createNewProgram = async (req, res) => {
    try {

        var data = await timestamp.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err)
    }
}

var updateProgram = async (req, res) => {
    try {
        var _id = req.params.id;
        var newData = req.body;
        var data = await programModel.findByIdAndUpdate({ _id }, newData, { new: true })
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

var deleteProgram = async (req, res) => {
    try {
        var _id = req.params.id;
        var data = await programModel.findByIdAndDelete(_id);
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports = {
    getAllPrograms,
    getProgramById,
    createNewProgram,
    updateProgram,
    deleteProgram
}