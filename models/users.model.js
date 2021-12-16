import { Model, Schema } from 'mongoose';
import { default as Order } from './order.model.js';

const userSchema = new Schema({
	fname: { type: String, required: true },
	lname: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	orders: [{ type: Schema.Types.ObjectId, ref: Order }],
});

export default Model('User', userSchema);
