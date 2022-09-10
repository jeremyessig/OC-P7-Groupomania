const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false,
    },
    likes: {
        type: Array,
        required: false,
    },
    dislikes: {
        type: Array,
        required: false,
    }
}, { timestamps: true });


module.exports = mongoose.model("Post", UserSchema);