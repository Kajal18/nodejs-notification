const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();
const jsonFile = require('jsonfile');
const users = __dirname + '/../data/user.json';
const sendSms = require('./sendSms');

const schedulerFunction = async () => {
  const usersData = await jsonFile.readFile(users);
  let subscribedUser = usersData.filter((obj) => obj.subscribe);
  subscribedUser = subscribedUser.map((obj) => obj['phone number']);
  await sendSms(subscribedUser);
};

// const scheduler = async () => {
schedule.scheduleJob('* * * * *', async () => {
  try {
    console.log('------scheduler called-------');
    schedulerFunction();
  } catch (er) {
    console.log(er);
  }
});
// };

// module.exports = scheduler;
