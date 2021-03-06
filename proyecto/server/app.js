const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
var bodyParser = require('body-parser');

const PORT = 8080;

// Middlewere

app.use(cors()); // esto tiene que ir antes de las rutas
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Coneccion con base de datos
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


// Conexion con puerto
app.listen(PORT, () => {
    console.log('listen at port 8080')
})
