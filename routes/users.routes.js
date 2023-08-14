const {Router} = require("express")
const userRouter = Router()
const {UserModel} = require("../models/users.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config()


const secret = process.env.skey



userRouter.post("/register", async(req,res)=>{

    //   return console.log("hello")

     const {name,email, password} = req.body;

        
        try {
            
          const isUserPresent =  await UserModel.find({email});
          console.log(isUserPresent)

          if(isUserPresent){

            return res.status(200).send("Please Register You are already register plaease login")
          }

          const hashPassword = bcrypt.hashSync(password, 7)

          const registerUser = await new UserModel({"name":name, "email":email, "password":hashPassword});
            registerUser.save()
            return res.status(201).send("Register successfuly")
             
        } catch (error) {
            
            return res.send({"msg":error.message});
        }

      
})



userRouter.post("/login", async(req,res)=>{

  const {email, password} = req.body;

        try {
            
             const LoginUser = await UserModel.findOne({email:email});
             if(!LoginUser){
                return res.status(401).send({"msg":"Please Register"})

             }

             const isUserPassword = await bcrypt.compare(password,LoginUser.password);

             if(!isUserPassword){

                return res.status(401).send({"msg":"Wrong Credential"})
             }

             
             const token = jwt.sign({userId:LoginUser._id,email:LoginUser.email},secret )
             return res.status(201).send({"msg":"Login successfully",token:token})


        } catch (error) {
            
            return res.send({"msg":error.message})
        }

      
})



module.exports = {userRouter}