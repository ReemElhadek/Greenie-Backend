const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
} =require('./users.controller')

//Get 
router.get('/', getAllUsers)
router.get('/:id', getUserById)

//Post
router.post('/', createNewUser)

//Update
router.patch('/:id', updateUser)

//Delete
router.delete('/:id', deleteUser)

module.exports = router