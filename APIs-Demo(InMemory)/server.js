//create HTTP server
//import express module
import exp from 'express'
import {userApp} from './APIs/userAPI.js'
import {prodApp} from './APIs/productAPI.js'
//create server
const app=exp()
//assign port number
app.listen(3000,()=>console.log('HTTP server listening on port 3000...'))
//body parsing middleware
app.use(exp.json())


// forward req to userApp when path starts with '/user-api'

app.use('/user-api',userApp)

// forward req to prodApp when path starts with '/product-api'

app.use('/product-api',prodApp)

