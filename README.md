# Notification sytem

## _The Last Markdown Editor, Ever_

[![Kajal](https://cldup.com/dTxpPi9lDf.thumb.png)](https://github.com/Kajal18)

This system contains notification feature either SMS or Email notification

- For SMS notification twillio is used
- for Email notification nodemailer is user
- ✨Magic ✨

## Features

- Create user using cli
- Update user using cli
- send SMS or Email notification to all user or single user
- schedule SMS notification at 12AM to all user

## Tech

This system uses a number of below packages to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [jsonfile] - nodejs server!
- [inquirer] - cli operation
- [chalk] - colouful output to cli
- [dotenv] - take values from .env file
- [jsonfile] - read and write operation to file
- [nodemailer] - email notification
- [twilio] - sms notification
- [node-schedule] - for scheduler

And of course Dillinger itself is open source with a [public repository][dill]
on GitHub.

## Installation

Install the dependencies and devDependencies and start the server.

#### please add .env file before running the project

```sh
npm i
npm run dev (send notification)
npm start (create and update user)
```

## Plugins

| Plugin | README                     |
| ------ | -------------------------- |
| GitHub | [plugins/github/README.md] |

## ENV

1. TWILIO_ACCOUNT_SID=AC2d8365f04e628e1c64cfc61b900c50e7
2.TWILIO_AUTH_TOKEN=23992e5a49a4678dd4c152e31c4a85f3
3.GMAIL_USERNAME= (gmail emailId)
4.GMAIL_PASSWORD= (gmail password)
