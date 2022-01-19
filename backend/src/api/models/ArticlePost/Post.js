const mongoose = require('mongoose')

const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        default: []
    }]
},
    {timestamps: true}
)

module.exports = mongoose.model("Post", postSchema);