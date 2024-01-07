import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'your-hostname',
    user: 'your-username',
    password: 'your-password',
    database: 'your-database-name',
});

connection.connect();

/*const connection = require('./db');

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    birthday DATE NOT NULL,
); */

const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    const { name, surname, email, age, birthday } = req.body;
    const INSERT_USER_QUERY = `INSERT INTO users (name, surname, email, age, birthday) VALUES('${name}', '${surname}', '${email}', '${age}', '${birthday})`
    connection.query(INSERT_USER_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        }
    });
});

router.get('/users', (req, res) => {
    const SELECT_ALL_USERS_QUERY = 'SELECT * FROM users';
    connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    });
});

export default router;