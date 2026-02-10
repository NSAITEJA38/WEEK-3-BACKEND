import {Schema,model} from 'mongoose'

// create cart Schema

// const cartSchema = new Schema({
//     product:{
//         type: Schema.Types.ObjectId,
//         ref: "product", // name of product model

//     }
    
// });
const cartSchema = new Schema({
    product:{
        type: Schema.Types.ObjectId,
        ref: "product", // name of product model

    },
    quantity:{
        type:Number,
        default:0
    }
});


const userSchema = new Schema({
    name:{
        type:String,
        minLength:[3,"min length of name is 3"],
        required:[true,"name is required"],

    },
    email:{
        type:String,
        unique:true,
        required:[true,"email is required"],
        // regex can be used
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minLength:[6,"minimum length of password should be 6"]
        // we can use regex for this as well
    },
    cart:{
        type:[cartSchema],
    }
},{
    strict:"throw",
    timestamps:true
})

export const UserModel = model("user",userSchema);