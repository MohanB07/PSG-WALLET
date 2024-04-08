const User = require('../models/userSchema')


exports.createUser = async (req,res) => {
    try {
        const newUser = new User({
            id: req.body.id,
            password: req.body.password,
            name: req.body.name,
        });

        await newUser.save();

        res.json({ success: true });

        console.log(newUser);

    } catch (error) {
        console.error('Error saving user:', error);
        res.json({ success: false, error: error.message });
    }
}

exports.login = async (req,res) => {
    try {
        const {id,password} = req.body;
        console.log(id+password);
        const user = await User.findOne({id, password});

        if(user){
            res.json({ success: true });
        }
        else{
            res.json({ success: false });
        }
    } catch (error) {
        console.error(error)
    }
}
