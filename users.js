/*
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login';
*/

import express from 'express';
import connection from "../db";

const router = express.Router();

router.post('/Login', (req, res) => {
    const { name, phone } = req.body;
    const insertQuery = `INSERT INTO users (name, phone) VALUES (?, ?)`;
       connection.query(insertQuery, [name, phone], (err) => {
        if (err) {
            console.error('Error registering user: '+err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }

//        const userId = results.insertId;
  //      res.status(201).send('User registered succesfully');
       });

}); 

export default router;