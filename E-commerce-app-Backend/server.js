// creating the http server
import express from 'express'
import {connect} from 'mongoose'
import { productApp } from './APIs/ProductAPI.js';
import {userApp} from './APIs/UserAPI.js'
import cookieParser from 'cookie-parser';

const app = express()

const port = 4000;

async function connectDB(){
    
    try{
        await connect("mongodb://localhost:27017/ecomdemo");
        console.log("Connected to database Successfully");
        app.listen(port,()=>{
            console.log("Server listening to port 4000");
            
        })
    }
    catch(err){
        console.log("error :",err.message)
    }
}

connectDB();

app.use(express.json())
app.use(cookieParser())
app.use('/user-api',userApp)
app.use('/product-api',productApp)


// error handler
app.use((err,req,res,next)=>{
    res.status(500).json({message:"error",reason : err.message});
})