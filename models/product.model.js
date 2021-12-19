import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
	title: { type: String, required: true },
	price: { type: Number, required: true },
	category: { type: String, required: true },
	rating: { type: Number, required: true },
	size: [{ type: String, required: true }],
	toppings: [{ type: String, required: true }],
	sauces: [{ type: String, required: true }],
	additions: [{ type: String, required: true }],
	image: { type: Object, required: true },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
