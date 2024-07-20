const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req, res) => {
    let name = req.body.name;
    let phone = req.body.phone;
    let query = req.body.query;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "vineshryapak1234@gmail.com",
            pass: "ziuk ygku tmfe mybr"
        },
        tls: {
            rejectUnauthorized: false // This allows self-signed certificates
        }
    });

    let mailOptions = {
        from: "vineshryapak1234@gmail.com",
        to: "internshipvit16@gmail.com",
        subject: "Enquiry from " + name,
        text: "Phone: " + phone + " Query: " + query
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("mail.err", err);
            res.status(500).json(err);
        } else {
            console.log("mail send", info.response);
            res.status(200).json("mail send");
        }
    });
});

app.listen(7000, () => { console.log("Server is listening @ 7000"); });
