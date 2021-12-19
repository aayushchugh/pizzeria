import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
	user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
	products: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Product' }],
	status: { type: String, required: true },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
