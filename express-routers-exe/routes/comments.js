import express from 'express';
import { posts, comments } from './posts.js';

const router = express.Router({ mergeParams: true });

router.use((req, res, next) => {
  const pid = Number(req.params.postId);
  const postExists = posts.some(p => p.id === pid);

  if (!postExists) {
    return res.status(404).json({ error: 'Post not found' });
  }

  next();
});

router.get('/', (req, res) => {
  const pid = req.params.postId;
  res.json(comments[pid] || []);
});

router.post('/', (req, res) => {
  const pid = req.params.postId;
  const newComment = {
    id: Date.now(),
    text: req.body.text
  };

  comments[pid] = comments[pid] || [];
  comments[pid].push(newComment);

  res.status(201).json(newComment);
});

export default router;
