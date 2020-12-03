const nodemailer = require("nodemailer");
const fs = require("fs");
const ejs = require("ejs");
var smtpTransport = require('nodemailer-smtp-transport');

class Mailer {
    constructor(){
      this.smtpTrans = nodemailer.createTransport(smtpTransport({
          host: "smtp.gmail.com",
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER || "trucesdin@gmail.com",
            pass: process.env.GMAIL_PASS || "Ezeddin@97@"
          }
      }));
    }
    sendEmail(params, callback) {
      var parametri = params;
      var smtpSender = this.smtpTrans;
      this.sendToAdminEmail(params, function(ris) {
        if (ris.statusCode === 200) {
          console.log("rendering ejs file!!");
          ejs.renderFile(__dirname + "/email.ejs", { nome: params.name }, function (err, data) {
            if (err) {
              console.log(err);
              callback({error: err, statusCode: 403});
              return;
            } else {
              console.log("im here!!");
                smtpSender.sendMail({from: process.env.GMAIL_USER || "trucesdin@gmail.com", to: ""+parametri.email, subject: 'No-Reply Artigianidelcotto', html: data}, (error, response) => {
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
            });
        }
        else {
          console.log(ris.error);
          callback({error: ris.error, statusCode: ris.statusCode});
          return;
        }
      });
    }
    sendToAdminEmail(params, callback) {
      console.log(params);
      this.mailOpts = {
        from: ''+params.email, // This is ignored by Gmail
        to: process.env.GMAIL_USER || "trucesdin@gmail.com",
        subject: ''+params.oggetto,
        text: `Il signor ${params.name} (con email: ${params.email}) chiede: ${params.message}`
      }
      this.smtpTrans.sendMail(this.mailOpts, (error, response) => {
          if (error) {
            callback({error: error, statusCode: 403});
            return;
          }
          else {
            callback({success: response, statusCode: 200});
            return;
          }
      });
      return;
    }
}

module.exports = Mailer;
