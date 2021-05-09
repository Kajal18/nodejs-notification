const jsonFile = require('jsonfile')
const userFile = __dirname + './user.json'

const writeFile = (file, data) => {
  jsonFile.writeFile(file, data, { spaces: 2 }, (err, res) => {
    if (err) console.error(err)
  })
}

module.exports = writeFile