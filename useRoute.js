import Express from 'express';
import { getAllUsers } from '.database.js';
//import Express from 'express';
const router = Express.Router();

router.get('/users', (req, res) => {
    getAllUsers((err, users) => {
        if (err) {
            res.status(500).send('Internal Server Error');
            return;
        }

        res.json(users);
    });
});

export default router;