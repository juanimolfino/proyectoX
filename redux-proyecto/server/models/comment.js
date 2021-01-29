const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    description: {
        type: String,
        required: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    User: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Comment', Comment)