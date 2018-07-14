/*
* 用户表
*/
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let userSchema = new Schema({
  openid: String
})
let user = mongoose.model('user', userSchema);
module.exports = user