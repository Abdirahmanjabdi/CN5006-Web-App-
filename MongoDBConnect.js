mongoose= require('mongoose') 
const MONG_URI= 'mongodb://localhost:27017/BookData' 

mongoose.connect(MONG_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
    .then(() => console.log(`Connection is successful to ${MONG_URI}`))
    .catch((err) => console.error(`Error occurred: ${err.message}`));
  
  // Get the database connection instance
  const db = mongoose.connection;
  
  // Optional additional events for debugging
  db.on('disconnected', () => console.log('MongoDB disconnected.'));
  db.on('reconnected', () => console.log('MongoDB reconnected.'));
  
  // Export the database connection
  module.exports = db;