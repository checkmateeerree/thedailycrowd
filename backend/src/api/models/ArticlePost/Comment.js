const mongoose = require('mongoose')

const { Schema } = mongoose;

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    votes: {
        type: Number,
        default: 0
    }
}, 
    {timestamps: true}
)

module.exports = mongoose.model("Comment", commentSchema);