const mongoose = require('mongoose');
const User = require('../models/User');
const Post = require('../models/Post');
const Gender = require('../models/gender');
mongoose.connect('mongodb://localhost:27017/proyecto', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    // datos para usuarios
    await User.deleteMany({});
    for (let i = 0; i < 10; i++) {
        const user = new User({
           name: `Elizabeth ${i}`,
           password: `1234`,
           email:`eli@${i}.com`
           
        })
        await user.save();
    }
    // datos para posteos
    await Post.deleteMany({});
    for (let i = 0; i < 10; i++) {
        const post = new Post({
           title: 'El mejor post del universo',
           description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
           
           
        })
        await post.save();
    }
    // datos para generos
    await Gender.deleteMany({});
    const genders = ['Garden', 'Syntetic Drugs']
    for (let i = 0; i < 1; i++) {
        const g = new Gender({
           gender: genders[i],
        });
    await g.save();
}
}

seedDB().then(() => {
    mongoose.connection.close();
})