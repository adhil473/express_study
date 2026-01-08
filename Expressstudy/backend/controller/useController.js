const argon2 = require("argon2")
const userModel = require("../models/userModel");   
const jwt = require("jsonwebtoken")
require('dotenv').config()
// new user registering token 
const tokengenration = (userid) => {
  try {
    return jwt.sign({userid},process.env.JWT_TOKEN,{expiresIn:'1d'})
  } catch (error) {
    console.log(error);
    
  }  
}

//post

const userCreate = async (req,res) =>{
    const {name,email,password} = req.body
    try {
        const hashedPassword = await argon2.hash(password)
        const userDetails = await  userModel.create({name,email,password:hashedPassword})
        const token = tokengenration(userDetails._id)
    res.json({message:"data sent successfully",name:userDetails.name,email:userDetails.email,password:userDetails.password,token})
        
    } catch (error) {
        console.log("userCreate is error", error);
        
        
    }     

    
}

//get

const userGet =  async (req,res) => {

    try {
         const fetchData = await userModel.find()
    res.json({message:'successful',sajid:fetchData})
        
    } catch (error) {
        console.log("userget is errorr", error);
        
        
    }
   
}

//getbyid


const userGetbyId = async(req,res) => {
    const userId = req.params.id
    try {
        const fetchedData = await userModel.findById(userId)
        res.json(fetchedData)
    } catch (error) {
         console.log("userGetbyId is errorr", error);
    }
}


//put//update

const userUpdate = async (req,res) =>{
    const {name,email,password} = req.body
    try {
        const userID = req.params.id
        const userupdate = await userModel.findByIdAndUpdate(userID,{name,email,password})
        res.json(userupdate)
        
    } catch (error) {
        console.log("update error", error);
        
        
    }
}

//delete

const userDelete = async (req,res) =>{
    const deleteid = req.params.id
    try {
        const userdelete = await userModel.findByIdAndDelete(deleteid)
        res.json(userdelete)
        
    } catch (error) {
        console.log("delete is error",error);
        
        
    }
}



module.exports = {userCreate,userGet,userGetbyId,userUpdate,userDelete}





