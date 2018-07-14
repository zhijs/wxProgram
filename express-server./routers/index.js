'use strict';

const users = require('./user.router.js');
const activity = require('./activity.router.js');
const upload = require('./upload.router.js');
const message = require('./message.router.js');
module.exports = function(app) {
  users(app);
  activity(app);
  upload(app);
  message(app)
};