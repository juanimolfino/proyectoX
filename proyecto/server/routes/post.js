const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
//import { NavLink } from 'react-router-dom';
const ReactRouterDom = require('react-router-dom')

router.get('/', async (req, res) => {
    const posts = await Post.find({})
    res.json(posts)
})


router.post('/', async (req, res) => {
    console.log(req.body) // ojo con el gender que si no lo elige viene vacio
    const { title, description, gender } = req.body;
    const newPost = new Post({ title: title, description: description });
    await newPost.save();
    res.send('OOOOOOKKKKK');
    //res.redirect('/');
})

module.exports = router;