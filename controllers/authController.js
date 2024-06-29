// Main LOGIC OF CODE

const User = require('../models/user.model.js');
const { hashPassword, comparePassword } = require('../helpers/authHelper.js');
const JWT = require('jsonwebtoken')
const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // Server-side validation
        if (!name) return res.send({ error: "Name Required" });
        if (!email) return res.send({ error: "Email Required" });
        if (!password) return res.send({ error: "Password Required" });
        if (!phone) return res.send({ error: "Phone Required" });
        if (!address) return res.send({ error: "Address Required" });

        // Checking existing user
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: "Already registered. Please Log in"
            });
        }

        // Register user
        const hashedPassword = await hashPassword(password);
        // Save user
        const newUser = new User({ name, email, phone, address, password: hashedPassword });
        await newUser.save();

        res.status(200).send({
            success: true,
            message: "User Registered Successfully",
            user: newUser
        });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error: e.message // This is where error should be defined.
        });
    }
};



//LOGIN POST

const loginController = async (req,res) => {
    try{

        const {email,password} = req.body
        //validation
        if(!email || !password){
            return res.status(200).send({
                success:false,
                message:'Invalid email or password'
            })
        }
        //check user
        const user = await User.findOne({email})
        if(!user){
            return res.status(200).send({
                success:false,
                message:'User not found!'
            })
        }

        const match = await comparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message:'User not found!'
            })
        }
        const token =  await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        
        res.status(200).send({
            success:true,
            message:'login succesfully',
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                token
            }
        })

    }catch(e){
        console.log(e);

        res.status(200).send({
            success:false,
            message:"Error in login",
            e
        })
    }
}

const testController = (req,res) =>{
    res.send('protected route');
}

module.exports = { registerController , loginController, testController};
