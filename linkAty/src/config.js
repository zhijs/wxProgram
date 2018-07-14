const env = 'prod'
const hosts = {
  prod: 'https://www.laiqiyue.cn'
}
// api
const api = {
  user:{
    login: {
      method: 'POST',
      url: '/user/wxlogin'	
    },
    info: {
  	  method: 'GET',
  	  url: '/user/info'
     }
  },
  activity: {
    list: {
      method: 'POST',
      url: '/activity/list'
    },
    publish: {
      method: 'POST',
      url: '/activity/publish'
    },
    upLoadImg: {
      method: 'POST',
      url: '/images/uploadImg'
    },
    likedUserUpdate: {
      method: 'POST',
      url: '/activity/likedUserUpdate'
    },
    joinRequest: {
      method: 'POST',
      url: '/activity/joinRequest'
    },
    activityDel: {
      method: 'POST',
      url: '/activity/delete'
    }
  },
  message: {
    list: {
      method: 'GET',
      url: '/message/list'
    },
    read: {
      method: 'POST',
      url: '/message/read'
    },
    messageDel: {
      method: 'POST',
      url: '/message/delete'
    },
    handRequestMsg: {
      method: 'POST',
      url: '/message/handRequestMsg'
    },
    chatSend: {
      method: 'POST',
      url: '/message/chatSend'
    }
  }
  
}
module.exports = {
  env,
  api: disposerUrl(api,hosts[env])
}

function disposerUrl(obj, prefix) {
  Object.keys(obj).forEach( v => {
    if(obj[v].url) {
      obj[v].url = prefix + obj[v].url
    } else {
      obj[v] = disposerUrl(obj[v], prefix)
    }
  })

  return obj
}