const schedule = require('node-schedule')
const rule = new schedule.RecurrenceRule()
// const { users } = require('../data/user')
const jsonFile = require('jsonfile')
const users = __dirname + '/../data/user.json'
rule.hour = 12
rule.minute = 1
rule.tz = 'ASIA/KOLKATA'

const scheduler = async () => {
  schedule.scheduleJob(rule, () => {
    const usersData = await jsonFile.readFile(users)
    let subscribedUser = usersData.filter(obj => obj.isSubscribed)
    subscribedUser = subscribedUser.map(obj => obj.phoneNo)
    await sendSms(subscribedUser)
  })
}

module.exports = scheduler  