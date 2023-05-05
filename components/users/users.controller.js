const userModel = require('./users.model');

var getAllUsers = async (req, res) => {
    try {
        var data = await userModel.find();
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

var getUserById = async (req, res) => {
    try {
        var _id = req.params.id;
        var data = await userModel.findById({ _id });
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

var createNewUser = async (req, res) => {
    try {

        var data = await userModel.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err)
    }
}

var updateUser = async (req, res) => {
    try {
        var _id = req.params.id;
        var newData = req.body;
        var data = await userModel.findByIdAndUpdate({ _id }, newData, { new: true })
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

var deleteUser = async (req, res) => {
    try {
        var _id = req.params.id;
        var data = await userModel.findByIdAndDelete(_id);
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
}