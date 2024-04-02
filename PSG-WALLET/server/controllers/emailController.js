const nodemailer = require('nodemailer');

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: "23mx118@psgtech.ac.in",
        pass: "znfl fwph jeob sfzg"
    }
});

const generatedOTPs = {};

const generateOTP = () => {
  const otpNumber = Math.floor(1000 + Math.random() * 9000);
  return otpNumber.toString();
};

const sendOTPEmail = async (toEmail, otp) => {
    try {
        const mailOptions = {
            from: {
                name: 'PSG-WALLET',
                address: '23mx118@psgtech.ac.in'
            },
            to: toEmail,
            subject: 'OTP for PSG_WALLET Account Verification',
            html: `
            <html>
            <head>
              <style>
                body, h1, p {
                  margin: 0;
                  padding: 0;
                }
            
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f2f2f2;
                }
            
                .header {
                  background-color: #007bff;
                  color: white;
                  text-align: center;
                  padding: 20px 0;
                }
            
                .psg-banner {
                  background-color: #007bff;
                  color: white;
                  text-align: center;
                  padding: 10px 0;
                  border-radius: 5px;
                  margin-bottom: 20px;
                }
            
                .content {
                  padding: 20px;
                }
            
                .otp {
                  font-size: 20px;
                  font-weight: bold;
                  color: #007bff;
                }
            
                .otp-container {
                  text-align: center;
                  margin-top: 20px;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <h1>PSG-WALLET OTP Verification</h1>
              </div>
              <div class="psg-banner">
                <h2>PSG-WALLET</h2>
              </div>
              <div class="content">
                <p>Your OTP for account verification is: <span class="otp">${otp}</span></p>
                <div class="otp-container">
                </div>
              </div>
            </body>
            </html>
            
            `
        };

        await transporter.sendMail(mailOptions);
        console.log(`OTP sent to ${toEmail}`);
        return otp;
    } catch (error) {
        console.error(error);
    }
};

exports.sendEmailsToUsers = async (userEmail) => {
  try {
      const otp = generateOTP();
      generatedOTPs[userEmail] = otp;
      await sendOTPEmail(userEmail, otp);
  } catch (error) {
      console.error(error);
  }
};

exports.getGeneratedOTP = (userEmail) => {
  return generatedOTPs[userEmail];
};