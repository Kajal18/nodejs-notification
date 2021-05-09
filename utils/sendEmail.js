// const request = require('request')

// const sendMail = async (to, templateId, data, attachment) => {
//   console.log({ to })
//   const mailList = to.map((email) => ({
//     email,
//   }))
//   let body = {
//     to: mailList,
//     templateId: parseInt(templateId),
//     params: data && data.content ? data.content : null,
//   }

//   const options = {
//     method: 'POST',
//     url: process.env.SENDINBLUE_URL,
//     headers: {
//       accept: 'application/json',
//       'api-key': process.env.SENDINBLUE_AUTH,
//       'content-type': 'application/json',
//     },
//     body,
//     json: true,
//   }

//   try {
//     request(options, (error, response) => {
//       if (error) throw new Error(error)
//       console.log('response.body', response.body)
//       return response.body
//     })
//   } catch (error) {
//     console.log(error)
//     throw new Error(error)
//   }
// }

// module.exports = sendMail



const SibApiV3Sdk = require('sib-api-v3-sdk')
const defaultClient = SibApiV3Sdk.ApiClient.instance

// Configure API key authorization: api-key
let apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.SENDINBLUE_AUTH

// Uncomment below two lines to configure authorization using: partner-key
// const partnerKey = defaultClient.authentications['partner-key'];
// partnerKey.apiKey = 'YOUR API KEY';

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()
const sendMail = async (to, templateId, data, attachment) => {
  const mailList = to.map((email) => ({
    email,
  }))
  sendSmtpEmail = {
    to: mailList,
    templateId: templateId,
    params: null,
    headers: {
      accept: 'application/json',
      'api-key': process.env.SENDINBLUE_AUTH,
      'content-type': 'application/json',
    },
  }

  apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
    console.log('API called successfully. Returned data: ' + data)
  }, function (error) {
    console.error(error)
  })
}


module.exports = sendMail