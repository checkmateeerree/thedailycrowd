const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
    email: {
        type: Text,
        unique: true,
        required: true
    },

    password: {
        type: Text,
        required: true
    },

    username: {
        type: Text,
        unique: true,
        required: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: []
    }],

    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        default: []
    }]
},
    {timestamps: true}
)

module.exports = mongoose.model("User", userSchema)