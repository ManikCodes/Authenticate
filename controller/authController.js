 const User = require('../model/userModel');
 const generateToken = require('../utils/generateToken');
 const asyncHandler = require('express-async-handler');


// User registeration
 const registerUser = asyncHandler(async (req, res)=>{
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if(userExists){
        res.status(400);
        throw new Error('User already exists');

    }
    const user = await User.create({ name, email, password });

    if (user){
        res.status(201).json({ 
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
         });
    }else{
        res.status(400);
        throw new Error('User Invalid');
    }
 });


 const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({ email });
    if (user &&(await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        });
    }else {
        res.status(401);
        throw new Error("Invalid Credentials");
    }
 });
 module.exports= {registerUser, authUser  };