const express = require('express');
const router = express.Router();
const {
    getAllFarms,
    getFarmById,
    createNewFarm,
    updateFarm,
    deleteFarm
} =require('./farm.controller')

//Get 
router.get('/', getAllFarms)
router.get('/:id', getFarmById)

//Post
router.post('/', createNewFarm)

//Update
router.patch('/:id', updateFarm)

//Delete
router.delete('/:id', deleteFarm)

module.exports = router