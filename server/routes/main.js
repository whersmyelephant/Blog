const express = require('express');
const router = express.Router();

// Routes
router.get('',(req, res) => {
    const locals = {
        title: "Evan's Blog",
        description: "Blog project created with NodeJS and MongoDB."

    }

    res.render('index', { locals });
});

router.get('/about',(req, res) => {
    res.render('about');
});

module.exports = router;