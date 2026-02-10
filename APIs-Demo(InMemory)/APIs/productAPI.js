import exp from 'express'

export const prodApp=exp.Router()

let products=[] // initiallizing the products array


prodApp.get('/products',(req,res)=>{
    res.status(200).json({message:"All Products",payload:products})//sending the response of products
})


prodApp.get('/products-id/:id',(req,res)=>{
    let prodId=Number(req.params.id)
    let findProd=products.find(prodObj=>prodObj.id===prodId)
    console.log(findProd)
    if(findProd === undefined){
        return res.status(404).json({message:"product not found by id"})
    }
    res.status(200).json({message:"product found",payload:findProd})
})

prodApp.get('/products-brand/:brand',(req,res)=>{
    let prodBrand=req.params.brand
    let findProdByBrand=products.find(prodObj=>prodObj.brand===prodBrand)
    if(findProdByBrand === undefined){
        return res.status(404).json({message:"product not found by brand"})
    }
    res.status(200).json({message:"product found by brand",payload:findProdByBrand})
})

prodApp.post('/products',(req,res)=>{
    let product=req.body//getting the product details and storing in product variable
    products.push(product)//pushing the product to products array
    res.status(200).json({message:"product added sucessfully"})//sending the response
})

prodApp.put('/products',(req,res)=>{
    let modifiedProd=req.body
    let productIndex=products.findIndex(prodObj=>prodObj.id===modifiedProd.id)
    if(productIndex !== -1){
        products.splice(productIndex,1,modifiedProd)
        return res.status(200).json({message:"product modified successfully",payload:products})
    }
    res.status(404).json({message:"product not modified"});
})


prodApp.delete('/products/:id',(req,res)=>{
    let deleteProdId=Number(req.params.id)
    let prod=products.findIndex(prodObj=>products.id === deleteProdId)
    if(prod === -1){
        return res.status(404).json({message:"produuct not found"})
    }
    let deletedProd=products.splice(deleteProdId,1)
    res.status(200).json({message:"deleted product details",payload:deletedProd})
})

