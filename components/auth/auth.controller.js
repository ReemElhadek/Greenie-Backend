const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require("../users/users.model");

// auth controller for registeration
const register = async(req, res, next) => {
    console.log(req.body);

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(req.body[4],salt);

    let user = new User({
        uName: req.body[0],
        email: req.body[1],
        fName: req.body[2],
        fLocation: req.body[3],
        password: passwordHash
    })
    user.save()
        .then(user => {
            res.json({
                message: 'User Added Successfully'
            })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured' + error
            })
        })

}

//auth controller for login 

const login = (req, res, next) => {
    var username = req.body[0]
    var password = req.body[2]

    User.findOne({ $or: [{ uName: username }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        console.log("Logged in user successfully")
                        let token = jwt.sign({ uName: user.uName }, 'verySecretValue', { expiresIn: '1h' })
                        res.json({
                            message: 'Login Successful',
                            token
                        })
                    } else {
                        res.json({
                            message: 'Password does not match'
                        })
                    }
                })
            } else {
                res.json({
                    message: 'No User Found'
                })
            }
        })
}

module.exports = {register,
    login}
