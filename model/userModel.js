const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
 const userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true, 
        unique: true
    },
     password:{
        type: 'string',
        required: true
     
    },

    role:{
        type: 'string',
        default: 'user'
    }


 });
  

 userSchema.pre('save', async function (next){
    if (!this.isModified('password')){
        next();
 }
const salt = await bcrypt.genSalt(10);
 this.password = await bcrypt.hash(this.password, salt);


});

userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
};
 

const User = mongoose.model('User', userSchema);
 

module.exports = User;