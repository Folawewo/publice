const app = require('./app');
const http = require('http');

require('dotenv').config();
require('./services/mongo');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
