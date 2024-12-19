const mongoose = require('mongoose');
const express = require('express');
const app = express();

const MONGO_URI = 'mongodb://localhost:27017/week8';
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', function (err) {
    console.log('Error occurred during connection: ' + err);
});
db.once('connected', function () {
    console.log(`Connected to ${MONGO_URI}`);
});

// Schema definition
const PersonScheme = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    Gender: String,
    Salary: Number,
});

// Model creation
const person_doc = mongoose.model('Person', PersonScheme, 'personCollection');
// counting all the documents
person_doc.countDocuments().exec()
.then(count=>{
console.log("Total documents Count :", count)
}) .catch(err => {
console.error(err)
})