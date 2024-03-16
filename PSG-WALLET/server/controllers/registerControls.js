const User = require('../models/userSchema')


exports.createUser = async (req,res) => {
    try {
        const newUser = new User({
            id: req.body.id,
            password: req.body.password,
            name: req.body.name,
            email: req.body.email,
        });

        await newUser.save();
        
        console.log(newUser);
        res.send("user logged in")
        //redir to login
    } catch (error) {
        console.error(error);
    }
}

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
