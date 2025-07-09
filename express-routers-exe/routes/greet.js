import express from 'express';

const router = express.Router();

export default router.get('/greet', (req, res) => {
    res.json({ mes: 'Hello from /greet!' });
});