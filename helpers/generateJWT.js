import jsonwebtoken from 'jsonwebtoken';

/**
 * Generate JWT
 * @param {{fname: string, lname: string, email: string, phone: number, orders: [object]}} user
 * @return {string} token
 */
const generateJWT = user => {
	return jsonwebtoken.sign(
		{
			fname: user.fname,
			lname: user.lname,
			email: user.email,
			phone: user.phone,
			orders: user.orders,
		},
		process.env.JWT_SECRET
	);
};

export default generateJWT;
