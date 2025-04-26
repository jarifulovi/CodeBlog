import express from 'express';
//import { getPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/postController';

const router = express.Router();

router.get('/getAllPosts', (req, res) => {
  // Logic to get all posts
  res.send('Get all posts');
});


export default router;