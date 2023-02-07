import express from 'express';

import dotenv from 'dotenv';

import Connection from './src/databases/db.js';
import volunteerRoutes from './src/routes/volunteerRoutes.js';

dotenv.config();

const app=  express();
const PORT = 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/' , volunteerRoutes);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username , password );


app.listen(PORT , ()=> {
    console.log(`the server is running at ${PORT}`);
});