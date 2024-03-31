
//email
const nodemailer = require('nodemailer');


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

const mailOptionsTemplate = {
    from: {
        name: 'PSG-WALLET',
        address: '23mx118@psgtech.ac.in'
    },
    subject: 'Account Approval',
    text: 'Your Email Body',
};

const sendEmail = async (toEmail, mailOptions) => {
    try {
        const options = { ...mailOptions, to: toEmail };
        await transporter.sendMail(options);
        console.log(`Mail sent to ${toEmail}`);
    } catch (error) {
        console.error(error);
    }
};

exports.sendEmailsToUsers = async (userEmail) => {
    try {
        const customizedMailOptions = {
            ...mailOptionsTemplate,
            subject: 'PSG_WALLET Account Approval',
            text: 'Hello, this is your PSG_WALLET account approval email.',
            html: `
            <html>
            <head>
              <style>
                body {
                  font-family: 'Arial', sans-serif;
                  background-color: #f5f5f5;
                  color: #333;
                  padding: 20px;
                  margin: 0;
                }
                .header {
                  background-color: #2b4bab; /* Primary color for PSG_WALLET */
                  color: #fff;
                  padding: 20px;
                  text-align: center;
                }
                .content {
                  padding: 40px;
                  border-radius: 15px;
                  background-color: #f0f0f0; /* Complementary color */
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  margin-top: 40px;
                }
                .cta-button {
                  display: inline-block;
                  padding: 15px 30px;
                  background-color: #2b4bab; /* Primary color for PSG_WALLET */
                  color: #fff; /* White text color */
                  text-decoration: none;
                  border-radius: 5px;
                  margin-top: 30px;
                  transition: background-color 0.3s ease;
                  font-size: 18px;
                }
                .cta-button:hover {
                  background-color: #1d3e95; /* Darker shade on hover */
                }
                .card {
                  background-color: #fff; /* White background */
                  padding: 20px;
                  border-radius: 10px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                  margin-bottom: 20px;
                }
                .banner {
                  background-color: #2b4bab; /* Primary color for PSG_WALLET */
                  padding: 40px;
                  text-align: center;
                  border-radius: 15px;
                  margin-top: 40px;
                }
                .banner img {
                  width: 200px;
                  height: auto;
                }
                .info {
                  text-align: center;
                  margin-top: 30px;
                  font-size: 20px;
                  color: #555; /* Darker complementary color */
                }
                .info p {
                  margin-bottom: 15px;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <h1>Welcome to PSG_WALLET</h1>
              </div>
              <div class="banner">
                <img src="../assets/icon-wallet.png" alt="PSG_WALLET Logo"> <!-- Replace with your logo -->
              </div>
              <div class="content">
                <div class="info">
                  <p>Hello,</p>
                  <p>Your PSG_WALLET account is ready for approval.</p>
                  <p>If everything looks good, please proceed to approve your account:</p>
                </div>
                <div style="text-align: center;">
                    <a href="http://localhost:5000/approve" class="cta-button">Approve Account</a>
                </div>
              </div>
            </body>
            </html>
  `,
};


            await sendEmail(userEmail, customizedMailOptions);
    } catch (error) {
        console.error(error);
    }
};