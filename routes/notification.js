const jsonFile = require('jsonfile')
const users = __dirname + '/../data/user.json'
const sendEamil = require('./sendEmail')
// const sendMail = require('../utils/sendEmail')
const sendSms = require('./sendSms')

const notification = async (req, res, next) => {
  try {
    const { query } = req
    const { time, notificationType } = query
    if (!notificationType) {
      throw new Error('Time or notification type is missing')
    }
    const usersData = await jsonFile.readFile(users)
    if (notificationType === 'SMS') {
      if (query.userEmail) {
        const user = usersData.find(obj => obj.email = query.userEmail)
        if (!user) {
          throw new Error('User not found!')
        }
        await sendSms(user.phoneNo)
      } else {
        let subscribedUser = usersData.filter(obj => obj.subscribe)
        subscribedUser = subscribedUser.map(obj => obj['phone number'])
        await sendSms(subscribedUser)
      }
    }
    if (notificationType === 'EMAIL') {
      let subscriberEmail
      if (query.userEmail) {
        subscriberEmail = [query.userEmail]
      } else {
        subscriberEmail = usersData.filter(obj => obj.subscribe)
        subscriberEmail = subscriberEmail.map(obj => obj.email)
      }
      //email using sendinblue
      // await sendMail(
      //   [subscriberEmail],
      //   process.env.MAIL_TEMPLATE_ID_FOR_SEND_LOUNGE_INVITATION,
      //   // { content: data }
      // )

      //using nodemailer
      await sendEamil(subscriberEmail)
    }
    return res.json('Notification sent successfully!')
  }
  catch (err) {
    throw new Error(err)
  }
}

module.exports = notification