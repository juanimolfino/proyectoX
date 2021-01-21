const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Gender = new Schema({
    gender: {
        type: String,
        required: true
    },
    // subGender: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'subGender'
    // },
});

module.exports = mongoose.model('Gender', Gender)