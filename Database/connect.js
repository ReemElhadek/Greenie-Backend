const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connect = async (URI) => {
    console.log('connected');
    return mongoose.connect(URI);
};

module.exports = connect;