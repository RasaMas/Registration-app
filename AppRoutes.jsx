import express from 'express';
import { getAllUsers } from '../components/userFunctions';

const router = express.Router();

/*
router.post('/register', (req, res) => {
    const { name, surname, email, age, birthday } = req.body;
    const insertQuery = `INSERT INTO users (name, surname, email, age, birthday) VALUES (?, ?, ?, ?, ?)`;
    connection.query(insertQuery, [name, surname, email, age, birthday], (err, results) => {
        if (err) {
            console.error('Error inserting into users table:' + err.stack);
            res.status(500).send('Internal Server Error.');
        }
        res.status(201).send('User created succesfully.')
    }); 
});
*/

router.get('/users', (req, res) => {
    getAllUsers((err, results) => {
        if (err) {
            res.status(500).send('Internal Server Error.');
            return;
        }
        res.json(results);
    })
});

export default router;