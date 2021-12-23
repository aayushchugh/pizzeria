const apiAuth = (req, res, next) => {
	// get api key from header
	const apiKeyFromClient = req.headers['x-api-key'];

	// get api key from env
	const apiKeyFromEnv = process.env.API_KEY;

	// compare both api keys
	if (apiKeyFromClient !== apiKeyFromEnv) {
		return res.status(401).json({
			success: false,
			message: 'Invalid API key',
			data: {},
		});
	}

	next();
};

export default apiAuth;
