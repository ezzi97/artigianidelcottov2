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
        from: ''+params.email, // This is ignored by Gmail
        to: 'ezeddin.eddaouy@gmail.com',
        subject: ''+params.oggetto,
        text: `Il signor ${params.name} (con email: ${params.email}) chiede: ${params.message}`
      }
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
