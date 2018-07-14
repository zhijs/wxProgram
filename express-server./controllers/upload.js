'use strict'
const formidable = require('formidable');
const fs = require('fs')
const md5 = require('md5')
const serverConf = require('../config/serverConfig')
const uploadPath = '.././express-server/images/'
const imageUrlPre = 'http://' + serverConf.domian + ':' + serverConf.port + '/'
exports.uploadImg = (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.encoding = 'utf-8';        //设置编辑
  form.uploadDir = uploadPath;     //设置上传目录
  form.keepExtensions = true;     //保留后缀
  form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
  form.parse(req, (err, fields, files) => {
     if (err){
       res.json({
       	  code: -1,
       	  msg: '上传图片出错'
       });
     } else {
       const file = files.image
       let extName = '';
       switch (file.type) {
         case 'image/pjpeg':
           extName = 'jpg';
           break;
         case 'image/jpeg':
           extName = 'jpg';
           break;
         case 'image/png':
           extName = 'png';
           break;
         case 'image/x-png':
           extName = 'png';
           break;
        }
        if (extName.length === 0 ){
           res.json({
           	  code: -1,
           	  msg: '图片格式不支持'
           })
        }
        let time = (new Date).getTime().toString()
        let imageName = md5(time) + '.' + extName;
        let newPath = uploadPath + imageName
        let imageUrl = imageUrlPre + imageName
        try {
          fs.renameSync(file.path, newPath);
          res.json({
            code: 1,
            data: imageUrl,
            msg: '上传成功'
          })
        } catch(e) {

        }
        
     }
  });

}