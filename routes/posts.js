import express from 'express';
import commentsRouter from './comments.js';

export const posts = [
  { id: 1, title: 'Hello' }
];

export const comments = {
  1: []
};

const router = express.Router();

router.get('/', (req, res) => {
  res.json(posts);
});

router.get('/:postId', (req, res) => {
  const pid = Number(req.params.postId);
  const post = posts.find(p => p.id === pid);

  if (!post) {
    res.status(404).json({ error: 'Post not found' });
  } else {
    res.json(post);
  }
});

router.use('/:postId/comments', commentsRouter);

export default router;
