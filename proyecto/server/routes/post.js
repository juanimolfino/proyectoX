const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Gender = require('../models/gender');

// HOME
router.get('/', async (req, res) => {
    const posts = await Post.find({})
    res.json(posts)
})

// GET TO DB
router.get('/gender', async (req, res) => {
    const genders = await Gender.find({})
    res.json(genders)
})

router.get('/postById/:_id/', async (req, res) => {
    const { _id } = req.params;
    const postById = await Post.findOne({
        _id: _id
    }, (err, data) => {
        if (err) return console.log('Error al querer traer el post para editar', err);
        return data;
    });
    return res.json(postById);
});

// CREATE ELEMENT INTO DB
router.post('/', async (req, res) => {
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
    console.log(req.body)
    const { _id } = req.body;

    Post.findByIdAndDelete(_id, (err, data) => {
        if (err) return console.log('Error, no pudo eliminar', err);
        return res.send();
    })
        .then(() => {
            console.log("Data deleted"); // Success 
            return res.send();
        })
        .catch(function (error) {
            console.log(error); // Failure
            return res.status(400).send('error al borrar')
        });
});

// UPDATE POST

router.put('/updatePost', async (req, res) => {
    console.log('ME LLEGO ESTO', req.body)
    const { _id, title, description } = req.body;    

    Post.findByIdAndUpdate(_id, {title, description},function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Updated User : ", docs);
            }
        })

    res.send()
});

module.exports = router;