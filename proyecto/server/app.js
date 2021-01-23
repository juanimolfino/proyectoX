const express = require('express');
const app = express();
const mongoose = require('mongoose')
const User = require('./models/User')
const cors = require('cors')




=======
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
//Requiero las rutas:
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user')
//Uso las rutas:
app.use('/post', postRoutes)
app.use('/user', userRoutes)



app.listen(8080, () => {
    console.log('listen at port 8080')
})
