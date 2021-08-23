import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  body: String, 
  reviews: [{ body: String, date: Date, username: String }],
  hidden: Boolean,
  price: Number, 
  mrp: Number, 
  meta: {
    likes: Number,
    favs :  Number
  }, 
 

}, 
{timestamps: true});

export const Product = mongoose.model('Product', productSchema); 
module.exports = Product; 