const ModelUser = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ENV = require("../config/env");

//add a user

const register = async (req, res) =>{
    try{
        const hashPassword = await bcrypt.hash(req.body.password, 10)

        const user = await ModelUser.create({
            ...req.body,
            password: hashPassword
        });

        res.status(201).json(user);


    } catch(error){
        //
        res.status(500).json(error.message)
    }
};

const login = async(req, res) =>{
    try{
        //search the user in the db
        const user = await ModelUser.findOne({email: req.body.email});
        //if user not found
        if(!user) return res.status(404).json('User not found');
        //verify the password
        const comparePassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        //if password incorrect
        if(!comparePassword) return res.status(400).json("Wrong credential ! ");

        //create the jwt
        const token = jwt.sign(
            {id: user._id},
            ENV.JWT_SECRET,
            {expiresIn: "24"}
        );

        const {password, ...others} = user._doc;

        res.cookie(
            'access_token',
            token,
            {httpOnly: true}
        )
        .status(200)
        .json(others)


    } catch(error){
        //
        res.status(500).json(error.message);
    }
}

module.exports = {
    register,
    login
};


