const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        avatar: {
            type: String
        },
        email:{
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }, { Timestamp: {createAte: true}}
);


module.exports = mongoose.model("User", UserSchema);



