
// 
const express = require('express');
const cors = require("cors")();
const mongoose = require('mongoose');
const morgan = require("morgan");

const routes = require('./routes/toDoRoute');


require('dotenv').config();

const connect = require("./db/connect");
const app = express();
const PORT = process.env.port || 8000;

app.use(cors);
app.use(morgan("tiny"));
app.use(express.json());
app.use(routes);

 console.log("PASSED 1")

// Connecting to Mongodb Database
const connectdb = () => {
    try {
      connect(process.env.MONGODB_CONNECT_URL);
      console.log("Connect to database successfully");
    } catch (err) {
      console.log("Connect unsuccessfully");
    }
  };
  

app.listen(PORT, () => console.log(`listening on : ${PORT}`));
connectdb();

