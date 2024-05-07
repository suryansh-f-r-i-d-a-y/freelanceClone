const express = require('express');
const mongoose = require('mongoose');

const app = express();

async () => { }
try {
    mongoose.connect('mongodb+srv://suryansh1016star:CnYE5277Ip7rxtus@freelance.guyfu7i.mongodb.net/');
    console.log("server connected to mongodb")
} catch (error) {
    console.log(error)
}

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});