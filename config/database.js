const mongoose = require('mongoose');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} = process.env;

const mongoUrl = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
mongoose.connect(mongoUrl, {
  auth: { authSource: 'admin' },
  user: MONGO_USERNAME,
  pass: MONGO_PASSWORD,
}, (err) => {
  if (err) console.error('MongoDB connection error', err);
});
mongoose.Promise = global.Promise;
