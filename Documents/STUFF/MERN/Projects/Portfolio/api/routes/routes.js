// const express = require("express");
// const router = new express.Router();
// const users = require("../models/userSchema");
// const nodemailer = require("nodemailer");

// // email config
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASS
//     }
// });


// //register user details
// router.post("/register", async (req, res) => {
//     const { fname, lname, email, mobile, message } = req.body;

//     if (!fname || !lname || !email || !mobile) {
//         res.status(401).json({ status: 401, error: "All Input require" })
//     }

//     try {
//         const preuser = await users.findOne({ email: email });

//         if (preuser) {
//             const userMessage = await preuser.Messagesave(message);
//             console.log(userMessage);
//             const mailOptions = {
//                 from: process.env.EMAIL,
//                 to: email,
//                 subject: "sending email using nodejs",
//                 text: "Your Response Has Been Submitted"
//             }

//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     console.log("error" + error)
//                 } else {
//                     console.log("Email sent" + info.response);
//                     res.status(201).json({ status: 201, message: "Email sent SUccesfully" })
//                 }
//             });
//         } else {
//             const finalUser = new users({
//                 fname, lname, email, mobile, messages:{message:message}
//             });

//             const storeData = await finalUser.save();

//             const mailOptions = {
//                 from: process.env.EMAIL,
//                 to: email,
//                 subject: "sending email using nodejs",
//                 text: "Your Response Has Been Submitted"
//             }

//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     console.log("error" + error)
//                 } else {
//                     console.log("Email sent" + info.response);
//                     res.status(201).json({ status: 201, message: "Email sent SUccesfully" })
//                 }
//             });
//             res.status(201).json({ status: 201, storeData })
//         }

//     } catch (error) {
//         res.status(401).json({ status: 401, error: "All Input require" });
//         console.log("catch error")
//     }

// })


const express = require("express");
const router = new express.Router();
const users = require("../models/userSchema");
const nodemailer = require("nodemailer");

// Backend base URL
const BASE_URL = "https://my-portfolio-zqe7.onrender.com"; // Backend link

// Email configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});

// Register user details
router.post("/register", async (req, res) => {
    const { fname, lname, email, mobile, message } = req.body;

    if (!fname || !lname || !email || !mobile) {
        return res.status(401).json({ status: 401, error: "All inputs are required" });
    }

    try {
        const preuser = await users.findOne({ email: email });

        if (preuser) {
            const userMessage = await preuser.Messagesave(message);
            console.log(userMessage);

            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: "Sending email using Node.js",
                text: "Your response has been submitted successfully.",
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error("Error sending email:", error);
                    return res.status(500).json({ status: 500, error: "Email failed to send" });
                } else {
                    console.log("Email sent:", info.response);
                    return res.status(201).json({ status: 201, message: "Email sent successfully" });
                }
            });
        } else {
            const finalUser = new users({
                fname,
                lname,
                email,
                mobile,
                messages: { message: message },
            });

            const storeData = await finalUser.save();

            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: "Sending email using Node.js",
                text: "Your response has been submitted successfully.",
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error("Error sending email:", error);
                    return res.status(500).json({ status: 500, error: "Email failed to send" });
                } else {
                    console.log("Email sent:", info.response);
                    return res.status(201).json({ status: 201, message: "Email sent successfully" });
                }
            });

            res.status(201).json({ status: 201, storeData });
        }
    } catch (error) {
        console.error("Error in register route:", error);
        res.status(500).json({ status: 500, error: "Internal Server Error" });
    }
});

module.exports = router;



// module.exports = router;
