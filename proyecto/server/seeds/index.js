const mongoose = require('mongoose');
const User = require('../models/User')
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
    await User.deleteMany({});
    for (let i = 0; i < 10; i++) {
        const user = new User({
           name: `Elizabeth ${i}`,
           password: `1234`,
           email:`eli@${i}.com`
           
        })
        await user.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})