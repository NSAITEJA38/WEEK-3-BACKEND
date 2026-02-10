// creating the mini express application

import express from 'express'
import {hash} from 'bcryptjs'
import { UserModel } from '../models/UserModel.js';
import { ProductModel } from '../models/ProductModel.js';

export const userApp = express.Router()

// create user
userApp.post('/users',async(req,res)=>{
    // getting the new user
    let newUser = req.body;
    //runvalidator
    await new UserModel(newUser).validate()
    // hashing the password
    let hashedPassword = await hash(newUser.password,12);
    newUser.password = hashedPassword;

    // making new doc for the user
    let newUserDoc = new UserModel(newUser);

    // saving this doc
    await newUserDoc.save({validateBeforeSave:false});

    res.status(201).json({message:"user created",payload:newUserDoc})
    
})



// add products to the users cart

userApp.get('/users', async(req,res)=>{
    let userList=await UserModel.find()
    res.status(200).json({message:"All users Data",payload:userList})
})

// userApp.put('/user-cart/user-id/:uid/product-id/:pid',async(req,res)=>{
//     //read uid,pid from url parameters
//     // let x=req.params here x will get two parameters (uid:"",pid:"") this line is same as 40
//     let {uid,pid}=req.params
//     console.log(uid,pid)
//     //check for the user
//     let user=await UserModel.findById(uid)
//     if(!user){
//         return res.status(401).json({message:"User not found"})
//     }
//     //check for the product
//     let product=await ProductModel.findById(pid)
//     if(!product){
//         return res.status(401).json({message:"Product not found"})
//     }
//     // perform update
//     let modifiedUser=await UserModel.findByIdAndUpdate(
//         uid,
//         {$push:{cart:{product:pid}}},
//         {new:true}
//     )
//     res.status(200).json({message:"product added successfullt",payload:modifiedUser})
// })

userApp.put("/user-cart/user-id/:uid/product-id/:pid",async(req,res)=>{
    try {
      const {uid,pid}=req.params;
      const user = await UserModel.findById(uid)
      if (!user){
        return res.status(404).json({ message:"User not found"})
      }
      const product = await ProductModel.findById(pid);
      if (!product){
        return res.status(404).json({message:"Product not found"})
      }
      // check if product already in cart
      let productIndex = user.cart.findIndex((obj)=>obj.product.toString()===pid)
      let modifiedUser;
      if(productIndex>-1){
        // increment quantity
        user.cart[productIndex].quantity+=1;
        modifiedUser = await user.save()
      } else{
        // add new product
        user.cart.push({product:pid,quantity:1})
        modifiedUser = await user.save();
      }

      res.status(200).json({message:"Product added to cart successfully",payload: modifiedUser});
    } catch(err){
      res.status(500).json({ message: "product not added to cart",reason:err.message});
    }
  }
);


userApp.get('/users/:id',async(req,res)=>{
    let userId=req.params.id
    let user=await UserModel.findById(userId).populate("cart.product")
    if(!user){
        return res.status(401).json({message:"user not found"})
    }
    res.status(200).json({message:"user details",payload:user})
})