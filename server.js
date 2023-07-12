const express  = require("express");
const dotenv  = require("dotenv");

// Load env vars
dotenv.config( { path: "./config/config.env" });

const app = express(); //Initialize app variable with express

const PORT = process.env.PORT || 5004; //Takes port from .env file and if not available then listens on port 5004

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)); // listens on port defined in config file





