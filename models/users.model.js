import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	fname: { type: String, required: true },
	lname: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: Number, required: true },
	password: { type: String, required: true },
	orders: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Order' }],
});

const User = mongoose.model('User', userSchema);

export default User;
