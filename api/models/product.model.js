const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * 
 * "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"

 */

const productSchema = new Schema({
  title: {
    type: String,
    required: 'Title is required'
  },
  description: {
    type: String,
    required: 'Description is required',
    minLength: [5, 'Description needs at least 5 characters']
  },
  price: {
    type: Number,
    required: 'Price is required',
    min: [0, 'Price must be grater than 0']
  },
  category: {
    type: String,
    required: 'Category is required',
    enum: ['men clothing', 'women clothing', 'jewelery', 'electronics']
  },
  image: {
    type: String,
    required: 'Image is required',
  }
}, { 
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
