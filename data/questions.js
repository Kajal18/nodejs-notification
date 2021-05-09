const inquirer = require('inquirer')

module.exports = {
  createUser: async () => {
    let questionList = [
      {
        name: 'email',
        type: 'input',
        message: 'Enter your email',
        validate: (value) => {
          if (!value.length) {
            return 'Please enter valid email!'
          } else {
            return true
          }
        }
      }, {
        name: 'name',
        type: 'input',
        message: 'Enter your name',
        validate: (value) => {
          if (!value.length) {
            return 'Please enter valid name!'
          } else {
            return true
          }
        }
      },
      {
        name: 'subscribe',
        type: 'confirm',
        message: 'Enter yes if you want to subscribe to notification',
        validate: (value) => {
          if (!value.length) {
            return 'Please enter valid answer!'
          } else {
            return true
          }
        }
      },
      {
        name: 'phone number',
        type: 'input',
        message: 'Enter your phone number',
        validate: (value) => {
          const phoneNumreg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
          if (!value.length || !phoneNumreg.test(value)) {
            return 'Please enter valid phone number!'
          } else {
            return true
          }
        }
      }
    ]
    return inquirer.prompt(questionList)
  },
  updateUser: async () => {
    let updateUserList = [
      {
        name: 'email',
        type: 'input',
        message: 'Enter your email',
        validate: (value) => {
          if (!value.length) {
            return 'Please enter valid email!'
          } else {
            return true
          }
        }
      },
      {
        name: 'subscribe',
        type: 'confirm',
        message: 'Enter yes if you want to subscribe to notification',
        validate: (value) => {
          if (!value.length) {
            return 'Please enter valid answer!'
          } else {
            return true
          }
        }
      },
    ]
    return inquirer.prompt(updateUserList)
  },
  askMenu: async () => {
    let menuList = {
      type: 'list',
      name: 'menu',
      message: 'Select one option',
      choices: [{ name: 'create user', value: 1 }, { name: 'update user', value: 2 }],
      filter: function (val) {
        return val
      }
    }
    return inquirer.prompt(menuList)
  }

}