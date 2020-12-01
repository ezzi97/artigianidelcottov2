const nodemailer = require("nodemailer");
const fs = require("fs");
const ejs = require("ejs");

class Mailer {
    constructor(){
      this.administrator = "trucesdin@gmail.com";
      this.smtpTrans = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: ""+this.administrator,
            pass: "Ezeddin@97@"
          }
      });
    }
    sendEmail(params, callback) {
      var parametri = params;
      var amministratore = this.administrator;
      var smtpSender = this.smtpTrans;
      this.sendToAdminEmail(params, function(ris) {
        if (ris.statusCode === 200) {
          ejs.renderFile(__dirname + "/email.ejs", { nome: params.name }, function (err, data) {
            if (err) {
              console.log(err);
              callback({error: err, statusCode: 403});
            } else {
                smtpSender.sendMail({from: ''+amministratore, to: ""+parametri.email, subject: 'No-Reply Artigianidelcotto', html: data}, (error, response) => {
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
        to: ''+this.administrator,
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
