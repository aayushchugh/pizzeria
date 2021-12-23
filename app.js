import express from 'express';
import path from 'path';
import apiAuth from './middlewares/apiAuth.js';

import authRouter from './routes/auth.routes.js';

const app = express();

/* ------------------------------- middlewares ------------------------------ */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(apiAuth);

/* --------------------------------- routes --------------------------------- */
app.use('/api', authRouter);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve('client', 'build', 'index.html'));
	});
}

export default app;
