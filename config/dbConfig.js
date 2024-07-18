// dbConfig.js
const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;

  connection.on('connected', () => {
    console.log('Connection Successful');
  });

  connection.on('error', (err) => {
    console.log('Connection unsuccessful:', err.message);
  });
};

module.exports = connectDB;
