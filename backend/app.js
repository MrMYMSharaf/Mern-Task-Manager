import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import Routes from './Routes/Route.js';
import Connection from './DB/connection.js';

const app = express();

dotenv.config();

app.use(express.json());  // Use built-in body-parser
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = process.env.PORT || 8080;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
