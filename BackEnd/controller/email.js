const nodemailer = require("nodemailer");

const sendLink = async (email_id, link = "") => {
    let message = `Please Click this link to Verify Your Email ${link}`;
    let subject = "Email Verification";
    await main(email_id, message, subject).catch(console.error);
};

const main = async (email_id, message, subject) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        },
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: email_id,
        subject: subject,
        text: message,
        // html: data,
    };

    console.log("Sending ,mail ======================>");
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(`Message sent:  ${info.response} to  ${email}`);
        }
    });
};

module.exports = {
    sendLink,
};
