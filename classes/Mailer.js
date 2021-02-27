const fs = require("fs");
const ejs = require("ejs");
const sgMail = require('@sendgrid/mail')

class Mailer {
    constructor(){
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    }
    sendEmail(params, callback) {
      /*ejs.renderFile(__dirname + "/email.ejs", { nome: params.name }, function (err, data) {
        if (err) {
          callback({error: err, statusCode: 403});
          return;
        } else {
            smtpSender.sendMail({from: process.env.GMAIL_USER, to: ""+parametri.email, subject: 'No-Reply Artigianidelcotto', html: data}, (error, response) => {
                if (error) {
                  callback({error: error, statusCode: 403});
                  return;
                }
                else {
                  callback({success: "Email inviata con successo", statusCode: 200});
                  return;
                }
            });
          }
        });*/
      const msg = {
        to: 'test@example.com', // Change to your recipient
        from: 'test@example.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      sgMail
        .send(msg)
        .then(() => {
          callback({success: "Email inviata con successo", statusCode: 200});
        })
        .catch((error) => {
          callback({error: error, statusCode: 403})
        })
    }
}

module.exports = Mailer;
