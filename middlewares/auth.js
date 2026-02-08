const jwt = require("jsonwebtoken");
const createError = require('./error');
const ENV = require("../config/env");


const verifyToken = (req, res, next) =>{
    //get the json (token) jwt from the cookies
    const token = req.cookies.acess_token;

    if(!token) return next(createError(401, "Acces Denied"));

    //verify the validity of the token by using jwt.verify
    jwt.verify(token, ENV.JWT_SECRET, (err, user) =>{

        if(err) return next(createError(403, "Token no validate"));

        //if the verif succeed
        req.auth = user

        next()
    }) 
}

module.exports = verifyToken;
