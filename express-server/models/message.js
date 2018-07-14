let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/*
* 消息数据字段定义
* 
*/
let messageSchema = new Schema({
  from: Object,
  activity: Object,
  message:{
    type: Object,
    default: []
  },
  hadRead: Boolean,
  to: String
});
let message = mongoose.model('message', messageSchema);
module.exports = message