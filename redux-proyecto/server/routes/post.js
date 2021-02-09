const express = require('express');
const router = express.Router({mergeParams: true});
const Post = require('../models/Post');
const Gender = require('../models/gender');

router.get('/', async (req, res) => {
    const posts = await Post.find({}).populate('gender')
    res.json(posts)
})

// RUTA PARA TRAER LOS POST SEGUN GENERO
router.get('/:gender', async (req, res) => {
    const {gender} = req.params
    const choosenGender = await Gender.find({gender: gender})
    const posts = await Post.find({gender: choosenGender}).populate('gender')
    // console.log(posts)
    res.json(posts)
})

// GET TO DB LOS GENEROS
router.get('/gender/getGender', async (req, res) => {
    const genders = await Gender.find({})
    res.json(genders)
})

// TRAE UN POST SEGUN SU ID
router.get('/postById/:_id/', async (req, res) => {
    const { _id } = req.params;
    const postById = await Post.findOne({
        _id: _id
    }, (err, data) => {
        if (err) return console.log('Error al querer traer el post para editar', err);
        return data;
    });
    // console.log(postById) muestra el post completo, es un objeto
    return res.json(postById);
});

// CREATE ELEMENT INTO DB
router.post('/', async (req, res) => {
    // console.log(req.body)
    const { title, description, gender } = req.body;
    const gnd = await Gender.findOne({
        gender: gender
    }, (err, data) => {
        if (err) return console.log(err);
        return data;
    })
    const newPost = new Post({ title: title, description: description, gender: gnd._id });
    await newPost.save();
    res.send();
})

// DELETE POST FROM DB BY ID
router.delete('/deletePost', async (req, res) => {
    //console.log(req.body)
    const { _id } = req.body;
    Post.findByIdAndDelete(_id, (err, data) => {
        if (err) return res.status(400).send('error al borrar')     
    })
    return res.send();
});

// UPDATE POST
router.put('/updatePost', async (req, res) => {
    const { _id, title, description } = req.body;    

    Post.findByIdAndUpdate(_id, {title, description},function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Updated User : ", docs);
            }
        })

    return res.send()
});

module.exports = router;