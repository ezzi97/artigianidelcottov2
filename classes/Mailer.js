const fs = require("fs");
const ejs = require("ejs");
const sgMail = require('@sendgrid/mail')

class Mailer {
    constructor(){
      //"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"
      //
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    }
    sendEmail(params, callback) {
      this.readEmailTemplate(params, function(data) {
        if (data.statusCode == 200) {
          const msg_send_to_admin = {
            to: ""+params.email,
            from: "trucesdin@gmail.com",
            subject: "No-reply Artigianidelcotto",
            text: "",
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
