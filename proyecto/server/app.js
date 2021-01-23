const express = require('express');
const app = express();
const mongoose = require('mongoose')
const User = require('./models/User')
const cors = require('cors')

// Middlewere
app.use(cors()); // esto tiene que ir antes de las rutas

//Requiero las rutas:
const postRoutes = require('./routes/post')

//Uso las rutas:
app.use('/post', postRoutes)

mongoose.connect('mongodb://localhost:27017/proyecto', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Routes
app.get('/users', async (req, res) => {
    const users = await User.find({})
    res.json(users)
})

app.listen(8080, () => {
    console.log('listen at port 8080')
})
