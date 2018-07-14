'use strict'
let message = require('../models/message')
let activity = require('../models/activity')
/*
* 接收加入活动的消息请求
*
*/
exports.joinRequest = (req, res, next) => {
  console.log('消息处理')
  if (req.body) {
    let messageData = req.body.message 
    let newMessage = new message(messageData)
    newMessage.save((err, data) => {
      if (err) {
        res.json({
          code: -1,
          msg: '消息发送失败'
        })
      } else {
        res.json({
          code: 1,
          msg: '消息发送成功'
        })
      }
   })
  } else {
    res.json({
      code: -1,
      msg: '消息发送失败'
    })
  }
}

/*
* 获取消息的列表 
*/
exports.getMessages = (req, res, next) => {
  let openid = req.get('session')
  console.log('获取消息列表')
  message.find({to: openid}, (err, data) =>{
    if (err) {
      res.json({
        code: -1,
        msg: '获取消息出错'
      })
    } else {
      res.json({
        code: 1,
        msg: '获取消息成功',
        data: data
      })
    }
  })
}

/*
* 标记某个消息为已读
*
*/
exports.messageRead = (req, res, next) => {
  console.log('标记消息')
  let data = req.body
  if (data.messageId) {
    message.findOneAndUpdate({_id: data.messageId}, { hadRead: true}, (err, data) => {
      if (err) {
        res.json({
          code: -1,
          msg: '更新消息状态失败'
        })
      } else {
        res.json({
          code: 1,
          msg: '更新更新消息状态成功'
        })
      }
    })
  } else {
    res.json({
      code: -1,
      msg: 'message id 不存在'
    })
  }
}


/*
* 活动发布者处理活动申请
*
*/
exports.handRequestMsg = (req, res, next) => {
  console.log('处理活动申请')
  let data = req.body
  let messageId = data.messageId
  let messageData = data.message
  let toMessage = data.toMessage
  let activityId = toMessage.activity.id
  let requestUser = toMessage.to
  let type = data.type
  let updateMessage =  new Promise( (resolve, reject) => {  // 更新我的消息列表
    message.findOneAndUpdate({_id: messageId}, { message: messageData}, (err, data) => {
      if(err) {
        reject(err)
      } else {
        resolve()
      }
    })   
  })

  let saveMessage = new Promise( (resolve, reject) => {  // 更新对方的消息列表
     let newMessage = new message(toMessage)
     newMessage.save( (err, data) => {
       if (err){
         reject(err)
       } else {
       	 resolve()
       }
     })
  })

  let upDateActivity = new Promise( (resolve, reject) => {
  	if (type === 'allow'){
      activity.findById(activityId, (err, data) => {
        if(err) {
          reject(err)
        } else {
          data.joinedUser.push(toMessage.to)
          activity.findOneAndUpdate({_id: activityId}, {joinedUser: data.joinedUser}, (err, data) =>{
            if (err){
              reject(err)
            } else {
              resolve()
            }
          })
        }	
      })
    } else {
      resolve()
    }
  })
  Promise.all([updateMessage, saveMessage, upDateActivity]).then( (value) => {
    res.json({
      code: 1, 
      msg: '发送成功'
    })
  }).catch( (err) => {
    res.json({
      code: -1,
      msg: '发送失败'
    })
  })
}


/*
* 消息发送处理
*
*/
exports.chatSend = (req, res, next) => {
  console.log('消息发送')
  let myMessageId = req.body.myMessageId
  let myMessage = req.body.myMessage
  let activityData = req.body.activity
  let messageData = myMessage[myMessage.length - 1]
  let toMessage = {
    type: 3,
    content: messageData.content,
    omitContent: messageData.omitContent,
    date: messageData.date
  }
  let toUserId = req.body.toUserId
  let userInfo = req.body.userData
  
  // 更新我的消息
  let updataMyMessage = new Promise( (resolve, reject) =>{
    message.findOneAndUpdate({_id: myMessageId}, {message: myMessage}, (err, data) =>{
      if (err){
        reject(err)
      } else {
      	resolve()
      }
    })
  })

  // 更新对方的消息
  let updateToMessage = new Promise( (resolve, reject) => {
    message.findOne({to: toUserId, activity: activityData}, (err, data) => {
      // 如果对方的消息已被删除，则重新创建
      if (!data) {
        let newMessage = {
          to: toUserId,
          activity: activityData,
          hadRead: false,
          message: toMessage,
          from: userInfo
        }
        message.save((err, data) => {
          if(err) {
            reject(err)
          } else {
            resolve()
          }
        })
      } else {
        let messageData = data.message
        messageData.push(toMessage)
        message.findOneAndUpdate({to: toUserId}, {message: messageData, hadRead: false}, (err, data) =>{
          if (err) {
            reject(err)
          }else {
            resolve()
          }  
        })	
      }
    })  
  })

  // 两者更新完成才算发送成功
  Promise.all([updataMyMessage, updateToMessage]).then( (value) => {
    res.json({
      code: 1,
      msg: '回复消息成功'
    })
  }).catch( (err) => {
    console.log(err)
    res.json({
      code: -1,
      msg: '回复消息失败'
    })
  })
}

/*
* 删除消息
*
*/
exports.messgeDel = (req, res, next) => {
  console.log('消息删除')
  if (req.body) {
    let messgeId = req.body.messgeId
    message.findOneAndRemove({_id: messgeId}, (err) =>{
      if (err){
        res.json({
          code: -1,
          msg: '删除消息失败'
        })
      } else {
      	res.json({
      	  code: 1,
      	  msg: '删除消息成功'
      	})
      }
    })
  } else {
  	res.json({
      code: -1,
      msg: '该消息id不存在'
    })
  }
}