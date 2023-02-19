const bodyParser = require('body-parser');
const express = require('express');
const mongooase = require('mongoose');

const BlogPost = require('./models/blog.model');

const app = express();

app.use(bodyParser.json());

module.exports = app;
