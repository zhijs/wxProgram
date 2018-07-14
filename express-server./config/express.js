'use strict'
let express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    compress = require('compression'),
    dbConf = require('./dbConfig'),
    user = require('../models/user');

module.exports = function() {
   var app = express();
   app.use(compress());
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({
    extended: true
  }));

   app.use(function(err, req, res, next) {
    if (!err) return next();
    console.error(err.stack);
    res.status(500).json({ message: 'Server error' });
  });

  app.use( (req, res, next) => {
  	let date = (new Date()).toString()
  	console.log(`log>>>>>>>>>${req.method} ${req.path} ${date}`)
  	// 除了登录操作外， 其余请求都要检测用户id
  	if(req.path !== '/user/wxlogin') {
  	  try {
  	  	let session = req.get('session')
  	  	user.findOne({openid: session}, 'openid', (err, user) => {
  	  	  console.log(err)
  	  	  if (err){
  	  	  	res.json({
  	  	      code: -2,
  	  	      msg: '身份信息验证失败，请重新进入'
  	  	    })
  	  	    return 
  	  	  }
  	  	})
  	  } catch(e) {
  	    res.json({
  	  	   code: -2,
  	  	   msg: '身份信息验证失败，请重新进入'
  	  	})
  	  	return
  	  }    
  	}
    next()
  })
  return app;
}