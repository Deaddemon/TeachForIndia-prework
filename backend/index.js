import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import Connection from './src/databases/db.js';
import volunteerRoutes from './src/routes/volunteerRoutes.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
 
dotenv.config();

const app=  express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/' , volunteerRoutes);

 
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*' , (req,res) => {
        res.sendFile(path.resolve(__dirname , '../frontend/build/index.html'));
 });


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username , password );


app.listen(PORT , ()=> {
    console.log(`the server is running at ${PORT}`);
});