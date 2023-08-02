const express = require('express');
const dotenv = require('dotenv');
// const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

//Connect to database using mongooseg

connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express(); //Initialize app variable with express

// app.use(logger);

//Dev logging middlware (want to use only in development environment)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps); //use this path in bootcamps file for file location

const PORT = process.env.PORT || 5004; //Takes port from .env file and if not available then listens on port 5004

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
); // listens on port defined in config file

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error ${err.message}`);
  //Close eserver and exit process
  server.close(() => {
    process.exit(1);
  });
});
