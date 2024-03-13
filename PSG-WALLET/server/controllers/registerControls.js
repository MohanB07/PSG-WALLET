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
        //redir to login
    } catch (error) {
        console.error(error);
    }
}

