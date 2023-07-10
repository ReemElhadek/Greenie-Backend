const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require("../users/users.model");

// auth controller for registeration
const register = async(req, res, next) => {

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(req.body.password,salt);

    let user = new User({
        uName: req.body.uName,
        email: req.body.email,
        fName: req.body.fName,
        fLocation: req.body.fLocation,
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
    var eadd = req.body.email
    var password = req.body.password

    User.findOne({ $or: [{ email: eadd }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
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
