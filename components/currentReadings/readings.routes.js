const express = require('express');
const router = express.Router();
const {
    GetAllReadings,
    GetReadingsById,
    GetLastReadings,
    DeleteReadings,
} = require('./readings.controller')

//Get 
// router.get('/', GetAllReadings)
// router.get('/:id', GetReadingsById)
router.get('/:key', GetLastReadings)

//Delete
router.delete('/:id', DeleteReadings)

module.exports = router