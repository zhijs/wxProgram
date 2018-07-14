'use strict'
let activity = require('../models/activity')
let fs = require('fs')
let serverConf = require('../config/serverConfig')
let prefix = serverConf.protocol + '://' + serverConf.domain + ':' + serverConf.port
let homePath = process.cwd()

const PAGE_ITEMS = 10
/*
* 添加新活动
*
*/

exports.publish =  (req, res, next) => {
	console.log('活动发布')
	if (req.body) {
	  let newActivity = new activity(req.body);
	  newActivity.save( (err, data) => {
	    if (err) {
	       console.log(err)
           res.json({
           	  code: -1,
           	  msg: '发布失败'
           })
	    } else {
	      res.json({
	        code: 1,
	        msg: '发布成功',
	        data: data
	      })
	    }
	  })
	}
}

/*
* 获取活动列表 
*/

exports.getActivityList = (req, res, next) => {
  console.log('获取活动列表')
  let page = req.body.page
  activity.find({}).sort({ _id: -1 }).exec((err, data) => {
    if (err) {
      res.json({
        code: -1,
        msg: '获取活动列表出错'
      });
    } else {
      let len = data.length
      let endIndex = page * PAGE_ITEMS > len ? len : page * PAGE_ITEMS
      res.json({
        code: 1,
        msg: '获取活动列表成功',
        data: data.slice((page - 1) * PAGE_ITEMS, page * PAGE_ITEMS),
        end: (endIndex === len) ? true : false
      })
    }
  })  
}

/*
* 更新活动喜欢的用户列表
* 
*/

exports.likedUserUpdate = (req, res, next) => {
  let data = req.body
  console.log('点赞')
  activity.findOneAndUpdate({_id: data.id}, { likedUser: data.userList}, (err, data) =>{
    if (err){
      res.json({
        code: -1,
        msg: '更新失败'
      })
    } else {
      res.json({
        code: 1,
        msg: '更新成功'
      })
    }
  })
}

/*
* 更新请求加入活动的用户
*
*/
exports.upDateRequest = (req, res, next) => {
  console.log('更新活动请求加入的用户列表')
  if (req.body) {
    let data = req.body
  	let requestUser = data.requestUser
  	let activityId = data.message.activity.id
    activity.findOneAndUpdate({_id: activityId}, { requestJoinUser: requestUser}, (err, data) =>{
	  if (err){
	    res.json({
	      code: -1,
	      msg: '更新失败'
	    })
	    return 
	  } 
    })
  } else {
    res.json({
      code: -1,
      msg: '消息发送失败'
    })
    return
  }
  next()
}

/*
* 根据id删除相应的活动和图片
*
*/
exports.activityDel = (req, res, next) => {
  console.log('删除活动')
  if(req.body) {
    let imgPaths = req.body.imgPaths 
  	let promiseAll = []
  	for(let i = 0; i < imgPaths.length; i++) {
      promiseAll[i] = new Promise ( (resolve, reject) => {
      	let path = homePath + '/images' + imgPaths[i].substr(prefix.length)
        fs.unlink(path, (err) => {
          if (err) {
          	console.log('删除文件出错')
          	console.log(err)
            reject(err)
          } else {
            resolve()
          }
        })  
      })    
    }
    let deleData = new Promise( (resolve, reject) => {
      activity.findByIdAndRemove(req.body.activityId, (err) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
    promiseAll.push(deleData)
    Promise.all(promiseAll).then( (value) => {
      res.json( {
        code: 1,
        msg: '删除成功'
      })
    }).catch((err) => {
      res.json ({
      	code: -1,
      	msg: '删除出错'
      })
    })
  } else {
    res.json ({
      code: -1,
      msg: '删除出错'
    })	
  }
}