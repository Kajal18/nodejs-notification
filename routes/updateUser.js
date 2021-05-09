const jsonFile = require('jsonfile')
const _ = require('lodash')
const writeFile = require('../data/writeToFile')
const userFile = __dirname + '/../data/user.json'

const update = async (data) => {
  try {
    const userInstance = await jsonFile.readFile(userFile)
    const user = data.email ? userInstance.find((o) => o.email === data.email) : null
    if (user) {
      const userIndex = _.findIndex(userInstance, (o) => o.email === user.email)
      user.subscribe = data.subscribe
      userInstance[userIndex] = user
    }
    await writeFile(userFile, userInstance)
    return user
  } catch (err) {
    console.log(err)
  }
}

module.exports = update
