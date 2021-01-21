const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subGender = new Schema({
    subGender: {
        type:String,
        required: true
    }
});


module.exports = mongoose.model('subGender', subGender)