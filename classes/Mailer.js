const fs = require("fs");
const ejs = require("ejs");
const sgMail = require('@sendgrid/mail')
const nodemailer = require('nodemailer');

class Mailer {
    constructor(){
      //"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"
      //
      sgMail.setApiKey("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");
      this.GMAIL_USER = process.env.GMAIL_USER;
      this.GMAIL_PWD = process.env.GMAIL_PASS;
      this.smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: this.GMAIL_USER,
          pass: this.GMAIL_PWD
        }
      });
    }
    sendEmail(params, callback) {
      const mailOpt = {
        from: "" + params.email,
        to: "" + this.GMAIL_USER,
        subject: "" + this.oggetto + " da " + params.nome,
        text: "" + params.message
      }
      this.smtpTrans.sendMail(mailOpt, (error, response) => {
        if (error) {
          callback({error: error, statusCode: 403})
        }
        else {
          sendToUserEmail(params.email, function(data) {
            callback(data);
          });
        }
      });
    }
    sendToUserEmail(email, callback) {
      this.readEmailTemplate(params, function(data) {
        if (data.statusCode == 200) {
          const msg_send_to_admin = {
            to: ""+email,
            from: ""+this.GMAIL_USER,
            subject: "No-reply Artigianidelcotto",
            text: "Abbiamo ricevuto la sua email, le risponderemo il più presto possibile",
            html: ''+data.html,
          }
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
        else {
          console.log("ERRORE 403");
          callback({success: "Email inviata con successo", statusCode: 200});
        }
      });
    }
    readEmailTemplate(params, callback) {
      ejs.renderFile(__dirname + "/email.ejs", { nome: params.name }, function (err, data) {
        if (err) {
          callback({error: err, statusCode: 403});
        } else {
          callback({html: data, statusCode: 200})
          }
        });
    }
}

module.exports = Mailer;
