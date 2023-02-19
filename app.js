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
  const id = req.params.id;
  try {
    const post = await BlogPost.findById(id);

    if (!post) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.json(post);
    }
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

    const post = new BlogPost({
      title: req.body.title,
      content: req.body.content,
    });

    await post.save();

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/posts/:id', async (req, res) => {
  const { title, content } = req.body;
  const post = await BlogPost.findByIdAndUpdate(
    req.params.id,
    { title, content },
    { new: true }
  );
  res.json(post);
});

app.delete('/posts/:id', async (req, res) => {
  await BlogPost.findOneAndRemove(req.params.id);
  res.json({ message: 'Post deleted' });
});

module.exports = app;
