const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Fav = new Schema({
    favBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
});

module.exports = mongoose.model('Fav', Fav)