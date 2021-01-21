const express = require('express');
const app = express();
const mongoose = require('mongoose')
const User = require('./models/User')
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/proyecto', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Middlewere
app.use(cors())


// Routes
app.get('/', async (req, res) => {
    const users = await User.find({})
    res.json(users)
})

app.listen(8080, () => {
    console.log('listen at port 8080')
})
