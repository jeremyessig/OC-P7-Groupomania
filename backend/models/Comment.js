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
    postId: {
        type: Array,
        required: true,
    }
}, { timestamps: true });


module.exports = mongoose.model("Comment", UserSchema);