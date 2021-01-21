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
    views: Number,
    fav: Number, // aca fav debe ser tal vez una tabla donde relaciones los fav que guarda cada usuario. y vista desde una publicacion que cantidad de vistos tiene
    comments: String, // aca lo mismo, supongo que sera una tabla que relacione comentario, usuario que lo realizo y la publicacion donde se hizo
    // image:  no se que tipo de dato sera una imagen, video lo mismo
    description: {
        type: String,
        required: true
    },
    Supplies: String,
    // hay que ver el tema de los pasos, como hacer para modularizar la info que se va guardando al ser varios pasos
});

module.exports = mongoose.model('Post', Post)