let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/*
* acitivity数据模型设置，相当于设置表的字段
* 
*/
let activitySchema = new Schema({
   author: String,
   title: String,
   type: String,
   date: {
     start: String,
     end: String,
     endTime: Number
   },
   posterPath: String,
   content: {
     contentText: String,
     imagesPath: Object
   },
   likedUser: Object,
   location: {
     name: String,
     address: String,
     latitude: Number,
     longitude: Number
   },
   joinedUser: {
     type: Object, 
     default: []
   },
   requestJoinUser: {
     type: Object, 
     default: []
   },
   poster: String
});

/*
* 定义活动数据模型
* @params1 集合名称
* @params2 schema对象
*/
let activity = mongoose.model('Activity', activitySchema);
module.exports = activity;