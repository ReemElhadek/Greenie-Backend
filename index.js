require('dotenv').config();
const express = require("express");
const app = express();
const sensorRoutes = require('./components/sensors/sensors.routes');
const userRoutes = require('./components/users/users.routes');
const farmRoutes = require('./components/farm/farm.routes');
const programsRoutes = require('./components/programs/programs.routes');
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

//Sensors
app.use('/api/sensor',sensorRoutes);
app.use('/api/user',userRoutes);
app.use('/api/farm',farmRoutes);
app.use('/api/programs',programsRoutes);

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
