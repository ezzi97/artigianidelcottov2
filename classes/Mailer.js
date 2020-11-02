const nodemailer = require("nodemailer");

class Mailer {
    const smtpTrans;
    constructor(serviceAccount){
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
    function sendEmail(callback) {
      const mailOpts = {
          from: ''+req.body.email, // This is ignored by Gmail
          to: 'coviditalia.net@gmail.com',
          subject: 'Nuovo messaggio da un utente www.coviditalia.net',
          text: `${req.body.name} (${req.body.email}) dice: ${req.body.message}`
        }
      // Attempt to send the email
      smtpTrans.sendMail(mailOpts, (error, response) => {
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
