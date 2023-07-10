
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