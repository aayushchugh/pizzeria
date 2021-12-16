import { config } from 'dotenv';
import mongoose from 'mongoose';
import app from './app.js';

config();

mongoose.connect(`${process.env.MONGO_URI}`, () => {
	app.listen(process.env.PORT);
});
