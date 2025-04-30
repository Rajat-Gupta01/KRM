
// 2PHTPtbwik6nwVVT---->mentorsnicin
const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

mongoose.connect("mongodb+srv://Rajat:<db_password>@assignment.nvile50.mongodb.net/mydb")
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })
