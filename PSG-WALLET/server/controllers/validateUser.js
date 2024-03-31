const User = require('../models/userSchema')
const { sendEmailsToUsers } = require('./emailController')

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
      sendEmailsToUsers(userEmail)
  } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
  }
}

exports.approve = async(req,res) => {
    try {
        res.json({ success: true });
        console.log("works from email");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}








