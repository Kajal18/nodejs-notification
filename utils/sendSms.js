const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const Twilio = require('twilio');
const twilio = new Twilio(accountSid, authToken);

const twilioSms = (num) => {
  console.log(num);
  twilio.messages.create(
    {
      from: process.env.TWILIO_PHONE_NUMBER,
      to: num,
      body: 'test notification',
    },
    function (err, result) {
      if (err) console.error({ err });
      console.log('Created message using callback');
    }
  );
};

const sendSms = async (receiverNumber) => {
  try {
    console.log({ receiverNumber });
    if (Array.isArray(receiverNumber)) {
      for (let num of receiverNumber) {
        console.log({ receiverNumber });
        await twilioSms(num);
      }
    } else {
      await twilioSms(receiverNumber);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendSms;
