'use strict'
// 图片上传
const upload = require('../controllers/upload')
module.exports = (app) => {
  app.post('/images/uploadImg', upload.uploadImg)
}