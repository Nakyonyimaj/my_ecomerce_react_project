import express from 'express';
import data from '../Data.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';


const seedRouter = express.Router();

seedRouter.get('/', async (req,res)=>{
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products)

    await User.remove({});
    const createdUser = await User.insertMany(data.users)
    res.send({createdUser , createdUser})
});
export default seedRouter;