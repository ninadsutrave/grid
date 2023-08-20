import express from 'express'
const router = express.Router()
import Product from './product.js'

router.get('/products', async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
  
    try {
      const totalCount = await Product.countDocuments();
      const totalPages = Math.ceil(totalCount / limit);
  
      console.log(totalCount)

      const records = await Product.find()
        .skip((page - 1) * limit)
        .limit(limit);
  
      res.json({
        records,
        page,
        totalPages,
      });
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'Internal server error' });
    }

});

router.post('/addproduct', async (req,res) => {
    try {
        const { unique_id, name, main_category, sub_category, image, ratings, no_of_ratings, discount_price, actual_price } = req.body;
    
        // Create a new product instance
        const newProduct = new Product({
            unique_id, name, main_category, sub_category, image, ratings, no_of_ratings, discount_price, actual_price
        });
    
        // Save the product to the database
        await newProduct.save();
    
        res.status(201).json({ message: 'Product added successfully', product: newProduct });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
})

router.get('/checking', (req,res) => {
    res.send({message: 'yo'});
})

export default router