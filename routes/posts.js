const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

const Post = require('../models/Post');

// @Route   GET /api/posts
// @Desc    Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({date: -1})

    if(!posts){
      return res.status(404).json({success: false, msg: 'There were no posts found...'});
    }
    
    res.json({success: true, posts});
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, msg: 'Server Error'});
  }
});

// @Route   POST /api/posts/
// @Desc    Create a post
router.post('/', [
  check('title', 'Post title is required').not().isEmpty(),
  check('message', 'Post message is required').not().isEmpty()
], async (req, res) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).json({success: false, errors: errors.array()});
  }

  try {
    const {title, message} = req.body;
    
    const newPost = new Post({
      title,
      message
    });

    const post = await newPost.save();

    res.status(201).json({success: true, post});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({success: false, msg: 'Server Error'});
  }
});

// @Route   GET /api/posts/:id
// @Desc    Delete post by id
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if(!post){
      return res.status(404).json({success: false, msg: 'User not found'});
    }

    await post.remove();
    res.status(200).json({success: true, msg: 'Post successfully removed'});
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, msg: 'Server Error'});
  }
});

module.exports = router;