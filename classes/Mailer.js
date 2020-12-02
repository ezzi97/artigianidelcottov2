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
            user: ""+process.env.GMAIL_USER,
            pass: ""+process.env.GMAIL_PASS
          }
      }));
    }
    sendEmail(params, callback) {
      var parametri = params;
      var smtpSender = this.smtpTrans;
      this.sendToAdminEmail(params, function(ris) {
        if (ris.statusCode === 200) {
          ejs.renderFile(__dirname + "/email.ejs", { nome: params.name }, function (err, data) {
            if (err) {
              console.log(err);
              callback({error: err, statusCode: 403});
            } else {
                smtpSender.sendMail({from: 'No-Reply - Artigiani del cotto', to: ""+parametri.email, subject: 'Grazie per averci contattato', html: data}, (error, response) => {
                    if (error) {
                      callback({error: error, statusCode: 403});
                      return;
                    }
                    else {
                      callback({success: response, statusCode: 200});
                      return;
                    }
                });
              }
            });
        }
        else {
          callback({error: ris.error, statusCode: ris.statusCode});
        }
      });
    }
    sendToAdminEmail(params, callback) {
      this.mailOpts = {
        from: ''+params.email, // This is ignored by Gmail
        to: ''+process.env.GMAIL_USER,
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
