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
    comment: [{ // dentro de post se guarda un arreglo de id de los comentarios que son respectivos a este post
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    like: Number,
    fav: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]


  

    // image:  no se que tipo de dato sera una imagen, video lo mismo
    
    

});

module.exports = mongoose.model('Post', Post)