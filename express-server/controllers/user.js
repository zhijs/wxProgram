'use strict'
let request = require('request');
let wxConfig = require('../config/wxConfig');
let user = require('../models/user')
let wxapi = "https://api.weixin.qq.com/sns/jscode2session?"
/*
* 处理登录请求
* 用小程序发送过来的code去微信服务器拿oppenid和session_key
*/
exports.login = (req, res, next) => {
  let code = req.get('x-wechat-code');
  let api = `${wxapi}appid=${wxConfig.appid}&secret=${wxConfig.secret}&js_code=${code}&grant_type=${wxConfig.grant_type}`;
  request(api, (err, response, body) => {
    if (err) {
      res.json({
        ocde: -1,
        msg: '网络错误'
      })
      return
    }	
  	let data = JSON.parse(body);
  	let userSession = `${data.openid}<<${data.session_key}`;
  	let userData = {
  	  openid: data.openid
  	};
  	let newUser = new user(userData)
  	user.find({openid: data.openid}, (err, data) => {
  	  if (err) {
  	    res.json({
  	       code: -1,
  	       msg: '登录出错'
  	    })
  	    return
  	  } else if (data.length === 0) {
  	    newUser.save( (err, data) => {
	  	  if(err) {
	  	    res.json({
	  	       code: -1,
	  	       msg: '登录出错'
	  	    })
	  	    return
	  	  } 
  	    })  
  	  }
  	})
   res.json({
     session: userSession,
     code: 1,
     msg: '验证成功'
   })
 })
}