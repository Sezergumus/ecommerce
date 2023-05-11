import express from 'express';
const router = express.Router();

router.get('/usertest', (req, res) => {
    res.send('Hello User!');
});

export default router;