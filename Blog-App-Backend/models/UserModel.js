import { Schema,model} from 'mongoose'
const userSchema=new Schema({
    firstName:{
        type:String,
        required:[true,"firstName is required"]
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:Number,
        required:[true,"Password Required"]
    },
    profileImageUrl:{
        type:String
    },
    role:{
        type:String,
        enum:['AUTHOR','USER','ADMIN'],
        required:[true,'{Value} Role is Invalid']
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{
    strict:"throw",
    timestamps:true,
    versionKey:false
})
//create Model
export const UserTypeModel=model("user",userSchema)