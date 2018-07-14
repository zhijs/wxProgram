'use strict';

const activity = require('../controllers/activity')

module.exports = function(app) {
  app.post('/activity/publish', activity.publish)
  app.post('/avtivity/list', activity.getActivityList)
  app.post('/activity/likedUserUpdate', activity.likedUserUpdate)
  app.post('/activity/joinRequest', activity.upDateRequest)
  app.post('/activity/delete', activity.activityDel)
};