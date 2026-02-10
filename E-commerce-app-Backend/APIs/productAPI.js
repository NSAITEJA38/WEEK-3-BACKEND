// creating the mini express application

import express from 'express'
import { ProductModel } from '../models/ProductModel.js';

export const productApp = express.Router()


// creating the product 
productApp.post('/products',async(req,res)=>{
    let newProduct = req.body;

    // creating the doc for new product
    let newPrdDoc = new ProductModel(newProduct);
    // save the new doc
    await newPrdDoc.save();
    res.status(201).json({message:"New product created",payload:newPrdDoc})
})

// getting all the products

productApp.get('/products',async(req,res)=>{
    let productList = await ProductModel.find();
    res.status(200).json({message:"products",payload:productList});
})