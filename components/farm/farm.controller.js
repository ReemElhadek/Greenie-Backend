const farmModel = require("./famr.model");

var getAllFarms = async (req, res) => {
    try {
        var data = await farmModel.find();
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

var getFarmById = async (req, res) => {
    try {
        var _id = req.params.id;
        var data = await farmModel.findById({ _id });
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

var createNewFarm = async (req, res) => {
    try {

        var data = await farmModel.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

var updateFarm = async (req, res) => {
    try {
        var _id = req.params.id;
        var newData = req.body;
        var data = await farmModel.findByIdAndUpdate({ _id }, newData, { new: true })
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

var deleteFarm = async (req, res) => {
    try {
        var _id = req.params.id;
        var data = await farmModel.findByIdAndDelete(_id);
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports = {
    getAllFarms,
    getFarmById,
    createNewFarm,
    updateFarm,
    deleteFarm
}