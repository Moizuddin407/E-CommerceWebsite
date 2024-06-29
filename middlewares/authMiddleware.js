// Used for authentications.

const JWT = require('jsonwebtoken')
const User = require('../models/user.model.js')
// Protected route token based:
const requireSignIn = async (req,res,next) =>{
    try{
        const decode = JWT.verify(
            req.headers.authorization,
             process.env.JWT_SECRET);
        req.user = decode;
        next();

    }catch(e){
        console.log(e);
    }

}

//Admin access
const isAdmin = async (req,res,next)=>{
    try{
        
        const user = await User.findById(req.user._id);
        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                message:"UnAuthorized Access",
            });
        }else{
            next();
        }
    }catch(e){
        console.log(e);
        res.status(401).send({
            success:false,
            e,
            message:'Error in admin'
        })
    }
}

module.exports = {requireSignIn,isAdmin}