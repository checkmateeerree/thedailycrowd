// responsible for getting, updating,
// and deleting users

const mongoose = require("mongoose")

//admin-protected
function getAllUsers(req, res){
    return res.json({"users": ["hi"]})
}

//not-protected (for now)
function getUser(req, res){
    return res.json({"user": "hi"})
}

module.exports = {
    getAllUsers,
    getUser
}