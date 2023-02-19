const bodyParser = require('body-parser');
const express = require('express');
const { default: mongoose } = require('mongoose');
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
      return res.status(404).json({ error: 'No posts found' });
    }
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/posts/:id', async (req, res) => {
  try {
    const post = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(post)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }

    await post.findById(post);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/posts', async (req, res) => {
  try {
    if (!req.body.title || !req.body.content) {
      return res.send.status(404).json({ error: 'Invalid request data' });
    }
  } catch (error) {}
});

module.exports = app;
