const bodyParser = require('body-parser');
const express = require('express');
const mongooase = require('mongoose');

const BlogPost = require('./models/blog.model');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, Welcome to PUBLICE!');
});

app.get('/posts', async (req, res) => {
  try {
    const posts = await BlogPost.find({});

    if (posts.length === 0) {
      return res.status(404).json({ error: 'No posts found!' });
    }
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = app;
