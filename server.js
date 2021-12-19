import { config } from 'dotenv';
import mongoose from 'mongoose';
import app from './app.js';

config();

const PORT = process.env.PORT || 8000;

mongoose.connect(`${process.env.DB_URI}`, () => {
	app.listen(PORT);
});
