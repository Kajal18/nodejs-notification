const inquirer = require('./data/questions');
const createUser = require('./routes/createUser');
const updateUser = require('./routes/updateUser');
const chalk = require('chalk');

const run = async () => {
  let result;
  let flag = true;
  while (flag) {
    let { menu } = await inquirer.askMenu();
    switch (menu) {
      case 1:
        const result = await inquirer.createUser();
        await createUser(result);
        console.log(chalk.yellow('User created successfully'));
        return true;
      case 2:
        const updateResult = await inquirer.updateUser();
        await updateUser(updateResult);
        console.log(chalk.yellow('User updated successfully'));
        // break
        return true;
      default:
        console.log('Oops something went wrong!');
    }
  }
};

run();
