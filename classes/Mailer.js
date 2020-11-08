const nodemailer = require("nodemailer");

class Mailer {
    constructor(){
      this.smtpTrans = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
          }
      });
    }
    sendEmail(params, callback) {
      this.mailOpts = {
          from: '', // This is ignored by Gmail
          to: '',
          subject: '',
          //text: `${req.body.name} (${req.body.email}) dice: ${req.body.message}`
        }
      // Attempt to send the email
      this.smtpTrans.sendMail(this.mailOpts, (error, response) => {
          if (error) {
            callback({error: error, statusCode: 403});
          }
          else {
            callback({success: response, statusCode: 200});
          }
      });
    }
}

module.exports = Mailer;
