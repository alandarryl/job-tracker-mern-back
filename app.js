const express = require('express');
// const cookieParser = require('cookie-parser');
const cors = require('cors');
// const helmet = require('helmet'); // optional

const app = express();

app.use(express.json());
// app.use(cookieParser());
app.use(cors());
// app.use(helmet());

// all the routes 

// call all the routes WITHOUT /api prefix


module.exports = app;