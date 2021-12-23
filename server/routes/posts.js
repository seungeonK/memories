import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

//router
//https://localhost:3000/posts
router.get('/', getPosts);
router.post('/', createPost);


export default router;