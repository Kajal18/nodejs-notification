const jsonFile = require('jsonfile')
const writeFile = require('../data/writeToFile')
const userFile = __dirname + '/../data/user.json'

const create = async (data) => {
  try {
    console.log({ data })
    let user = []
    const usersData = await jsonFile.readFile(userFile)
    if (!usersData) {
      user.push(data)
    } else {
      let userInstance = usersData.find(o => o.email === data.email)
      if (!userInstance) {
        usersData.push(data)
        user.push(...usersData)
      } else {
        return usersData
      }
    }
    await writeFile(userFile, user)
    return true
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = create