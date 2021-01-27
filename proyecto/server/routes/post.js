const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Gender = require('../models/gender');

router.get('/', async (req, res) => {
    const posts = await Post.find({})
    res.json(posts)
})

router.get('/gender', async (req, res) => {
    const genders = await Gender.find({})
    res.json(genders)
})


router.post('/', async (req, res) => {
    const { title, description, gender } = req.body;
    const gnd = await Gender.findOne({
        gender: gender
    }, (err, data) => {
        if(err) return console.log(err);
        //console.log('soy el genero', data);
        return data;
    })

    //console.log('soy el body' , req.body);
    //console.log('soy el g' , gnd);
    
    const newPost = new Post({ title: title, description: description, gender: gnd._id});
    await newPost.save();
    res.send();
})

router.delete('/deletePost', async(req, res) => {
    console.log(req.body)
    const { _id } = req.body;
    
   
    Post.findByIdAndDelete(_id, (err, data) => {
        if(err) return console.log(err);
        //console.log('soy el genero', data);
        return res.send();
    })
    .then(() => {
        console.log("Data deleted"); // Success 
        return res.send();
    })
    .catch(function(error){ 
        console.log(error); // Failure
        return res.status(400).send('error al borrar')
    }); 
    
})

module.exports = router;