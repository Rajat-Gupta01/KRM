
// 2PHTPtbwik6nwVVT---->mentorsnicin
const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

mongoose.connect("mongodb+srv://mentorsnicin:US4VfMnBgZ9v4zTM@assignment.06212xz.mongodb.net/?retryWrites=true&w=majority&appName=assignment")
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })