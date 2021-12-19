import { genSalt, hash, compare } from 'bcrypt';
import User from '../models/users.model.js';
import generateJWT from '../helpers/generateJWT.js';

/* --------------------------------- signup --------------------------------- */

export const signup = async (req, res) => {
	try {
		// get input from user
		const { fname, lname, email, phone, password, cpassword } = req.body;

		// validate user input
		if (!fname || !lname || !email || !phone || !password || !cpassword) {
			return res.status(400).json({
				success: false,
				message: 'Please fill in all fields',
				data: {},
			});
		}

		// check if user already exists
		const existingUser = await User.findOne({
			$or: [{ email }, { phone }],
		});

		if (existingUser) {
			return res.status(409).json({
				success: false,
				message: 'User already exists',
				data: {},
			});
		}

		// check if passwords match
		if (password !== cpassword) {
			return res.status(400).json({
				success: false,
				message: 'Password and Confirm Password do not match',
				data: {},
			});
		}

		// hash password
		const salt = await genSalt(10);
		const hashedPassword = await hash(password, salt);

		// create new user
		const newUser = await User.create({
			fname,
			lname,
			email,
			phone: +phone,
			password: hashedPassword,
			orders: [],
		});

		// generate JWT
		const token = generateJWT(newUser);

		return res.status(201).json({
			success: true,
			message: 'User created successfully',
			data: newUser,
			token,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: 'Internal Server Error',
			data: {},
		});
	}
};

/* ---------------------------------- login --------------------------------- */

export const login = async (req, res) => {
	try {
		// get input from user
		const { email, password } = req.body;

		// validate user input
		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: 'Please fill in all fields',
				data: {},
			});
		}

		// get user from DB
		const user = await User.findOne({ email });

		// send error if there is no user
		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'User not found',
				data: {},
			});
		}

		// check if password is correct
		const isPasswordCorrect = await compare(password, user.password);

		// send error if password is incorrect
		if (!isPasswordCorrect) {
			return res.status(401).json({
				success: false,
				message: 'Password is incorrect',
				data: {},
			});
		}

		// generate JWT
		const token = generateJWT(user);

		return res.status(200).json({
			success: true,
			message: 'User logged in successfully',
			data: user,
			token,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: 'Internal Server Error',
			data: {},
		});
	}
};
