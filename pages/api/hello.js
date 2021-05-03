// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config({ path: "../../.env" });
const nodemailer = require("nodemailer");
export default (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    const mailOption = {
      from: `${email}`,
      to: `adithic99@gmail.com`,
      subject: `New mail from ${email}`,
      text: `
      ${name} wrote:
      ${message}
      `,
    };
    transporter.sendMail(mailOption, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("mail send");
      }
    });
    res.send("success");
  }
  res.status(200).json({ name: "John Doe" });
};
