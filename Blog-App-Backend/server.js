import exp from 'express'
import {config} from 'dotenv'
import {connect} from 'mongoose'
import { userRoute } from './APIs/UserAPI.js'
import { adminRoute } from './APIs/AdminAPI.js'
import { authorRoute } from './APIs/AuthorAPI.js'
config()//process.env this will give all the data of .env
//create express applicaiton
const app=exp()
//connect APIs
app.use('/user-api',userRoute)
app.use('admin-api',adminRoute)
app.use('author-api',authorRoute)
const connectDB=async()=>{
    try{
    await connect(process.env.DB_URL)
    console.log("DB connection successful ..");
    app.listen(process.env.PORT,()=>console.log("server started ...."))
    }catch(err){
        console.log("error in DB connection")
    }
}
connectDB()

//add body parser middleware
app.use(exp.json())

//error handling middelware
app.use((err,req,res,next)=>{
    console.log("error occured")
    res.json({message:"Error",reason:err.message})
})
