const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  bookTitle: { 
    type: String,
    required: true
  },
  pubYear: Number, 
  author: String,
  topic: String, 
  format: String 
});

module.exports = mongoose.model('BookModel', BookSchema, 'BookCollection2');