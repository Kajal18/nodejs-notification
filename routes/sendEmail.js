const nodemailer = require('nodemailer')

const sendEamil = async (toEmail, subject, htmlText) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD
    }
  })

  let message = {
    from: 'kajalrana774@gmail.com',
    to: toEmail,
    subject: 'Notification' || subject,
    text: 'Hello to myself!',
    html: 'Hello there, this is test notification' || htmlText,
  }

  let info = await transporter.sendMail(message)
  console.log('Message sent successfully as %s', info.messageId)
}

module.exports = sendEamil