const express = require('express');
const connectdb = require('./config/db_mongo');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// const helmet = require('helmet'); // optional
const ENV = require('./config/env');

//import the routes
const JobRoutes = require('./routes/job.route');
const UserRoutes = require("./routes/user.route");

//connection to mongo
connectdb(ENV.MONGO_URI, ENV.DB_NAME);

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors());

// call all the routes WITHOUT /api prefix

app.use("/api/job", JobRoutes);
app.use("/api/user", UserRoutes);

//error handling middleware
app.use((error, req, res, next) =>{
    const status= error.status || 500
    const message = error.message || "Une erreur est survenue."
    const detail = error.details || null

    res.status(status).json({
        error: {
            status,
            message,
            detail
        }
    })

} )


module.exports = app;