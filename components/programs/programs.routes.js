const express = require('express');
const router = express.Router();
const {
    getAllProgramNames,
    getProgramById,
    createNewProgram,
    updateProgram,
    deleteProgram
} =require('./programs.controller')

//Get 
router.get('/', getAllProgramNames)
router.get('/:id', getProgramById)

//Post
router.post('/', createNewProgram)

//Update
router.patch('/:id', updateProgram)

//Delete
router.delete('/:id', deleteProgram)

module.exports = router