import express from 'express';
const router = express.Router();

router.post('/register', (req, res) => {
    res.send('Register endpoint hit');
});


router.get('/users', (req, res) => {
    res.send('Users endpoint hit');
});

export default router;