const User = require('../models/userSchema')

exports.validateStudent = async (req,res) => {
    try {
        const { id } = req.query;

        const student = await User.findOne({id});

        if (student) {
            res.json({ success: true });
        }
        else {
            res.json({ success: false });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
