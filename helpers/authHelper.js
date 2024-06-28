const bcrypt = require ('bcrypt')

const hashPasswordFunc = async(password) => {
    try{
        const saltRound = 10;
        const hashedPass = await bcrypt.hash(password,saltRound);
        return hashedPass;
    }catch(e){
        console.log(e);
    }
}

const comparePasswordFunc = async (password,hashedPass) => {
    return bcrypt.compare(password,hashedPass);
}

module.exports = {hashPassword: hashPasswordFunc,comparePassword: comparePasswordFunc};