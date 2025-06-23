const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Routes
router.get('',(req, res) => {
    const locals = {
        title: "Evan's Blog",
        description: "Blog project created with NodeJS and MongoDB."

    }

    res.render('index', { locals });
});


function insertPostData () {
    Post.insertMany([
        {
            title: "Building a blog",
            body:"This is the body text"
        },
    ])
}
insertPostData();









router.get('/about',(req, res) => {
    res.render('about');
});

module.exports = router;