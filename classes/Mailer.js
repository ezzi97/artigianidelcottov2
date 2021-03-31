const fs = require("fs");
const ejs = require("ejs");
const sgMail = require('@sendgrid/mail')
const nodemailer = require('nodemailer');

class Mailer {
    constructor(){
      //"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"
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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
      this.sendToUserEmail(params, function(data) {
        console.log(data);
      });
      this.sendEmailToAdmin(params, function(data) {
        callback(data);
      });
    }
    sendEmailToAdmin(params, callback) {
      console.log(params.email);
      const mailOpt = {
        sender: "" + params.email,
        replyTo: "" + params.email,
        from: "" + params.email,
        to: "" + this.GMAIL_USER,
        subject: "" + params.oggetto + " da " + params.name,
        text: "" + params.message
      }
      this.smtpTrans.sendMail(mailOpt, (error, response) => {
        if (error) {
          callback({error: error, statusCode: 403})
        }
        else {
          callback({success: "Email inviata ad Artigiani del Cotto con successo", statusCode: 200});
        }
      });
    }
    sendToUserEmail(params, callback) {
      const GMAIL_USER = this.GMAIL_USER;
      this.readEmailTemplate(params, function(data) {
        if (data.statusCode == 200) {
          const msg_send_to_admin = {
            to: ""+params.email,
            from: ""+GMAIL_USER,
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
