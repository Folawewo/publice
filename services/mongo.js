const mongooase = require('mongoose');

require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongooase.connect(MONGO_URL, () => {
  console.log('Database Connected');
});
