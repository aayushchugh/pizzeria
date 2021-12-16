import { Schema, Model } from 'mongoose';

const productSchema = new Schema({
	title: { type: String, required: true },
	price: { type: Number, required: true },
	category: { type: String, required: true },
	rating: { type: Number, required: true },
	size: [{ type: String, required: true }],
	toppings: [{ type: String, required: true }],
	sauces: [{ type: String, required: true }],
	image: { type: Object, required: true },
});

export default Model('Product', productSchema);
