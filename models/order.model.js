import { Schema, Model } from 'mongoose';
import { default as Product } from './product.model.js';
import { default as User } from './users.model.js';

const orderSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: User },
	products: [{ type: Schema.Types.ObjectId, ref: Product }],
	status: { type: String, required: true },
});

export default Model('Order', orderSchema);
