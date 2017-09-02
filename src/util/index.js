export function formatDate(str) {
  const t = new Date()
  const o = {
    'y': t.getFullYear(),
    'm': t.getMonth() + 1, // 月份
    'd': t.getDate()      // 日
  }
  let M = ('0' + o.m).slice(-2)
  let D = ('0' + o.d).slice(-2)
  let fmt = o.y + M + D

  let year = str.slice(0, 4)
  let month = str.slice(4, 6)
  let day = str.slice(6, 8)
  let dateArr = [year, month, day]
  let date = dateArr.join('/')
  let index = new Date(date).getDay()
  let week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][index]

  if (fmt === str ) {
    return '今日热闻'
  }else {
    return month + '月' + day + '日 ' + week
  }
}