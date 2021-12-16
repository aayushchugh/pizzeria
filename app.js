import express from 'express';
import path from 'path';

const app = express();

/* ------------------------------- middlewares ------------------------------ */
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve('client', 'build', 'index.html'));
	});
}

export default app;
