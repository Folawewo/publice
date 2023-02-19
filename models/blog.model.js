const mongoose = require('mongoose');

const BlogPost = mongoose.model('BlogPost', {
    title: String,
    content: String
});

module.exports = BlogPost;