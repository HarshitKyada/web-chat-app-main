const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "8d89f5dc720621",
        pass: "8c6183bba5b770",
      },
    });

    await transporter.sendMail({
      from: "8d89f5dc720621",
      to: email,
      subject: subject,
      text: text,
    });
  } catch (error) {
    // console.log("email not sent!");
    console.log(error);
    return error;
  }
};
