'use strict'
const user = require('../controllers/user')
module.exports = (app) => {
  app.post('/user/wxlogin', user.login)
}