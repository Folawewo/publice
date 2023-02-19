const mongoose = require('mongoose');

const BlogPost = mongoose.model('BlogPost', {
    title: String,
    body: String
});

module.exports = BlogPost;