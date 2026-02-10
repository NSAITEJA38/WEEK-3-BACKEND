import exp from 'express'
//create min-experss(Seperate Route ) app
export const userApp=exp.Router() // here we are creting min-express app not total express app



let users=[]
userApp.get('/users',(req,res)=>{
    //send users data in response
    res.status(200).json({message:"all users data",payload:users})
})



// post req handling route
userApp.post('/user',(req,res)=>{
    //the data which is received form post method is present in body of the request
    let user=req.body
    // console.log(user)
    users.push(user)
    res.status(200).json({message:"user created"})
})


//Read user by id
userApp.get('/users/:id',(req,res)=>{
    //read id from url parameter
    // console.log(req.params)
    let userId=Number(req.params.id)
    let user=users.find(userObj=>userObj.id===userId)
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"user details",payload:user})

})
// put req handling route
userApp.put('/users/id',(req,res)=>{
    //get modified user from req
    let modifiedUser=req.body
    console.log(modifiedUser)
    // let found=false
    // //find the user with id exist in users array
    // for(let user of users){
    //     if(user.id === modifiedUser.id){
    //         found=true
    //         user.Name=modifiedUser.Name
    //         user.Age=modifiedUser.Age
    //     }
    // }
    // if(!found){
    //     res.json({message:"user not found"})
    // }
    let useridx=users.findIndex(userobj=>userobj.id===modifiedUser.id)
    if(useridx===-1){
        return res.status(404).json({message:"user not found"})
    }
    users.splice(useridx,1,modifiedUser)
    //if user not found,send res as "user not found"
    //if user found ,then modify the user
    //send res as "User modified"
    res.status(200).json({message:"User modified succesfully"})
})


// delete req handling route
userApp.delete('/users/:id',(req,res)=>{
   let userId=Number(req.params.id)
   let user=users.findIndex(userOjb => userOjb.id===userId)
   if(user !== -1){
    let deletedUser=users.splice(user,1)
    return res.status(200).json({message:"user deleted",payload:deletedUser})
   }
   res.status(404).json({message:"user  not found"})
})
