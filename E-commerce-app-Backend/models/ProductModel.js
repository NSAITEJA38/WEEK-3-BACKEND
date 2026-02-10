import {Schema,model} from 'mongoose'

const productSchema = new Schema({
    productName : {
        type:String,
        required:[true,"product Name is required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"]
    },
    brand:{
        type:String,
        required:[true,"brand is required"]
    }
},{
    strict:"throw",
    timestamps:true,
    versionKey:false
})

export const ProductModel = model("product",productSchema)