const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    commentId: {
        type: Array,
        required: false,
    },
    imagesUrl: {
        type: Array,
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

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Post", UserSchema);