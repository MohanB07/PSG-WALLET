const User = require('../models/userSchema')
const { sendEmailsToUsers, getGeneratedOTP } = require('./emailController')

exports.validateStudent = async (req,res) => {
    try {
        const { id } = req.query;
        console.log(id);

        const student = await User.findOne({id : id});

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

exports.sendEmail = async(req,res) => {
    try {
        const { id } = req.query;

        const lowercaseId = id.toLowerCase();
        const userEmail = lowercaseId + "@psgtech.ac.in";
        console.log(userEmail);

        await sendEmailsToUsers(userEmail)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


exports.verifyOTP = (req, res) => {
    try {
        const { enteredOTP, id } = req.body;

        const userEmail = id.toLowerCase() + "@psgtech.ac.in";
        const OTPfromEmail = getGeneratedOTP(userEmail);
        console.log(OTPfromEmail);

        if (!OTPfromEmail) {
            res.status(400).json({ error: "No OTP found for the user" });
            return;
        }
        if (OTPfromEmail === enteredOTP) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};









