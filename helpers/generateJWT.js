import jsonwebtoken from 'jsonwebtoken';

/**
 * Generate JWT
 * @param {{_id: string}} user
 * @return {string} token
 */
const generateJWT = user => {
	return jsonwebtoken.sign(
		{
			id: user._id,
		},
		process.env.JWT_SECRET
	);
};

export default generateJWT;
