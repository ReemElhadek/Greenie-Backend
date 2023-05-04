const express = require('express');
const router = express.Router();
const {
    getAllSensors,
    getSensorById,
    createNewSensor,
    updateSensor,
    deleteSensor
} =require('./sensors.controller')

//Get 
router.get('/', getAllSensors)
router.get('/:id', getSensorById)

//Post
router.post('/', createNewSensor)

//Update
router.patch('/:id', updateSensor)

//Delete
router.delete('/:id', deleteSensor)

module.exports = router