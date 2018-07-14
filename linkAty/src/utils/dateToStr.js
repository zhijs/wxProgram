/* 
*将时间对象转化为字符串形式
* Data() -> 年/月/日  or  年/月/日 时:分
*/

exports.date2str = (date, type) => {
  let month = date.getMonth() > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
  let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
  let hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
  let minutes = date.getMinutes() > 9 ? date.getMinutes() : ('0' + date.getMinutes())
  let datestr = date.getFullYear() + '/' + month + '/' + day;
  let datetimeStr = date.getFullYear() + '/' + month + '/' + day + ' ' + hour + ':' + minutes
  if (type === 'datestr') {
    return datestr
  } else {
    return datetimeStr
  }
}