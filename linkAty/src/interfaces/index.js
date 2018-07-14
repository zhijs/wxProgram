import wepy from 'wepy'
import { api } from '../config'

const interfaces = {
  async getUserInfo() {
    const loginData = await wepy.login()
    const userInfo = await wepy.getUserInfo()
    let userinfoData = {
      name: userInfo.userInfo.nickName,
      avatar: userInfo.userInfo.avatarUrl
    }
    try {
      wepy.setStorageSync('_userinfo', userinfoData)
    } catch (e) {
    }
    userInfo.code = loginData.code
    return userInfo
  },
  async login() {
    let userinfoRaw = {}
    let userinfo = {}
    try {
  	  userinfoRaw = await interfaces.getUserInfo() 	  
  	  userinfo = await wepy.request({
  	    url: api.user.login.url,
  	    method: api.user.login.method,
  	    header: {
  	      'x-wechat-code': userinfoRaw.code,
  	      'x-wechat-encrypted': userinfoRaw.encryptedData,
  	      'x-wechat-iv': userinfoRaw.iv
  	    },
  	    dataType: 'json',
  	    data: {}
  	  })
      if (userinfo.data.code === -1) {
        wepy.showModal({
          title: '提示',
          content: '获取信息失败，请重新进入'
        })  
      }
  	  await wepy.setStorage({
  	    'key': '_session',
  	     data: userinfo.data.session
  	  })
    } catch(e) {
      wepy.showModal({
        title: '提示',
        content: '获取信息失败，请重新进入'
      })
    }
  }
}

export default interfaces