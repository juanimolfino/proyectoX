const express = require('express');
const app = express();
const mongoose = require('mongoose')
const User = require('./models/User')
const cors = require('cors')

//Requiero las rutas:
const postRoutes = require('./routes/post')

//Uso las rutas:
app.use('/', postRoutes)

mongoose.connect('mongodb://localhost:27017/proyecto', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(cors()) //para que los puertos 3000 y 8080 no se interfieran

// app.get('/', async (req, res) => {
//     const users = await User.find({})
//     res.json(users)
// })

app.listen('8080', () => {
    console.log('listen at port 8080')
})
