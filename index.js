require('dotenv').config();
const express = require("express");
const app = express();
const motorRoutes = require('./components/motors/motor.routes');
const connect = require('./Database/connect');
var cors = require('cors');
const PORT = 8000;
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Welcome to our project</h1>');
});

/// GET - POST - UPDATE - DELETE // CRUD Operations

//Motor
app.use('/api/motor',motorRoutes);

const connection = async () => {
    try {
      await connect( process.env.mongodbURI_GLOBAL );
      app.listen(PORT, () => {
        console.log(PORT)
      });
    } catch (error) {
    }
  };

connection();
