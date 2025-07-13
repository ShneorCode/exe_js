import express from 'express';
import { query1, query2, query3 } from './service.js';

const router = express.Router();

router.get('/query1', async (req, res) => {
    try {
        const result = await query1();
        res.json(result);
    } catch (err) {
        console.error(err);

    }
});

router.get('/query2', async (req, res) => {
    try {
        const result = await query2();
        res.json(result);
    } catch (err) {
        console.log(err);

    }
});


router.get('/query3', async (req, res) => {
    try {
        const result = await query3();
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

export default router;
