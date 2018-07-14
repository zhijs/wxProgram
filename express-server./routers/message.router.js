'use strict'
const message = require('../controllers/message')

module.exports = function(app) {
  app.post('/activity/joinRequest', message.joinRequest)
  app.get('/message/list', message.getMessages)
  app.post('/message/read', message.messageRead)
  app.post('/message/handRequestMsg', message.handRequestMsg)
  app.post('/message/chatSend', message.chatSend)
  app.post('/message/delete', message.messgeDel)
};