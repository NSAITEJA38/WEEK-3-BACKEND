import { Schema,model } from 'mongoose'

//create user comment Schema
const UserCommentSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    comment:{
        type:String,
    }
})

//create atricle Schema
const articleSchema=new Schema({
    author:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:[true,"Author ID Required"]
    },
    title:{
        type:String,
        required:[true,"title is required"]
    },
    category:{
        type:String,
        required:[true,"category is required"]
    },
    content:{
        type:String,
        required:[true,"content is required"]
    },
    comments:[UserCommentSchema],
    isArticleActive:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true,
    strict:"throw",
    versionKey:false
})

export const ArticleModel=model('article',articleSchema)