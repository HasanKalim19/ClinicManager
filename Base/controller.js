
const BaseModel = require('../Base/model');
var nodemailer = require('nodemailer');

class Controller {

    constructor() {
   
    }
    async sendMail(recipient, mailSubject, body){

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
             // user: 'elutag.se@gmail.com',
             user:'abid.iq381@gmail.com',
              //pass: '123P@ssword'
              pass:'ahmed@3811'
            }
          });
          
          var mailOptions = {
            from: 'elutag.se@gmail.com',
            to: recipient,
            subject: mailSubject,
            text: body
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        
    }
    static async sendHTMLMail(recipient, mailSubject, body, htmlBody){
console.debug("hellooooooo")
      var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'elutag.se@gmail.com',
            pass: '123P@ssword'
          }
        });
        
        var mailOptions = {
          from: 'elutag.se@gmail.com',
          to: recipient,
          subject: mailSubject,
          text: body,
          html: htmlBody
        };
        console.debug("hellooooooo" + htmlBody)
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      
  }

}

module.exports = Controller;