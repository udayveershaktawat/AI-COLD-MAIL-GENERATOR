const User = require("../models/authModel");


exports.registerUser = async(req,res)=>{
    try {
        const {username,email,password} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        if(password.length>6){
            return res.status(400).json({
                message:"password length must be atleast 6 character"
            })
        }
        

    } catch (error) {
        
    }
}

exports.login = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
    
}