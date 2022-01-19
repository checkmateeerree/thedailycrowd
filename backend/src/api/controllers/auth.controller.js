const mongoose = require("mongoose")

function login(req, res){
    return res.json({message: "hi"})
};


function register(req, res){
    return res.json({message: "hi"})
};

module.exports = {
    loginController: login,
    registerController: register
}