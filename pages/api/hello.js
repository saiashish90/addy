// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config({ path: "../../.env" });
const nodemailer = require("nodemailer");
async function sendmail(req) {
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
  let info = await transporter.sendMail(mailOption);
  return info.respose;
}

export default (req, res) => {
  if (req.method === "POST") {
    res.send(sendmail(req));
  }
};
