const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title: {
        type: String, 
        required: true
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
        required: true
    },
    gender: {
        type: Schema.Types.ObjectId,
        ref: 'Gender'
    },
    subGender: {
        type: Schema.Types.ObjectId,
        ref: 'subGender'
    },
    comment: { // COMO ES EL TEMA DE LOS ARREGLOS EN MONGODB??
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
    like: Number,
    fav: Number, // hay que ver como funciona esto


  

    // image:  no se que tipo de dato sera una imagen, video lo mismo
    
    

});

module.exports = mongoose.model('Post', Post)