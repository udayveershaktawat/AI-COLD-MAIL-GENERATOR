const User = require("../models/authModel");

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length > 6) {
      return res.status(400).json({
        message: "password length must be atleast 6 character",
      });
    }
     const userAlreadyExists = await User.findOne({email})
    if(userAlreadyExists){
      return res.status(400).json({message:"user already exists"})
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Data(Date.now() + 10*60*1000);


    const user  =  await User.create({username,email,password,otp,otpExpiry});
    res.status(201).json({
      user,
      message:"user created successfully"
    })




  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "error while register",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userAlreadyExists = await User.findOne(email)
    if(userAlreadyExists){
      return res.status(400).json({message:"user already exists"})
    }


  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "error while login",
      error: error.message,
    });
  }
};
