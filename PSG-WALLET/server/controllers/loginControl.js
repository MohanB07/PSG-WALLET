const User = require('../models/userSchema')


exports.login = async (req,res) => {
    try {
        const {id,password} = req.body;
        
        const user = await User.findOne({id, password});

        if(user){
           console.log("login success")
           //redir to home
        }
        else{
            res.send("user not found");
        }
        
    } catch (error) {
        console.error(error)
    }
}
