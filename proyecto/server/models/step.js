const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Step = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'post'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    number: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    //imagenes, videos, archivos???
    description: {
        type: String,
        required: true
    },
    supplies: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Step', Step)