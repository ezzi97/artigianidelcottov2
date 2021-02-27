const fs = require("fs");
const ejs = require("ejs");
const sgMail = require('@sendgrid/mail')

class Mailer {
    constructor(){
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    }
    sendEmail(params, callback) {
      console.log(params);
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
      const msg_send_to_admin = {
        to: "trucesdin@gmail.com",
        from: ""+params.email,
        subject: ""+params.soggetto,
        text: ""+params.message,
      }
      const msg_send_to_user = {
        to: ''+params.email, // Change to your recipient
        from: 'trucesdin@gmail.com', // Change to your verified sender
        subject: ''+params.soggetto,
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      sgMail.send(msg_send_to_user);
      sgMail
        .send(msg_send_to_admin)
        .then(() => {
          console.log("Email inviata con successo");
          callback({success: "Email inviata con successo", statusCode: 200});
        })
        .catch((error) => {
          console.log(error);
          callback({error: error, statusCode: 403})
        })
    }
}

module.exports = Mailer;
