const express = require("express");
const app = express();
const userRoutes = require('./components/users/users.routes');
const programsRoutes = require('./components/programs/programs.routes');
const readingsRoutes = require('./components/currentReadings/readings.routes');
const authRoutes = require('./components/auth/auth.routes');
const connect = require('./Database/connect');
require('dotenv').config();
var cors = require('cors');
const PORT = 8000;
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Welcome to our project</h1>');
});

/// GET - POST - UPDATE - DELETE // CRUD Operations
app.use('/api/user', userRoutes);
app.use("/auth", authRoutes);
app.use('/api/programs', programsRoutes);
app.use('/api/readings', readingsRoutes);

const connection = async () => {
    try {
      await connect( process.env.mongodbURI_GLOBAL );
      app.listen(PORT, () => {
        console.log(PORT);
      });
    } catch (error) {
    }
  };

connection();
