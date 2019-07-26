const { Base64 } = require('./base64.js')

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const baseUrl = {
  dev: 'http://10.32.16.37:10651/ccm-web/h5/v1',
  sit: 'http://10.32.16.37:10651/ccm-web/h5/v1',
  prod: 'https://ccm.blackfish.cn/ccm-web/h5/v1'
}

const changeBase64ToJson = data => {
  let res = null
  if (typeof data === 'string') {
    try {
      data = Base64.decode(data)
      res = JSON.parse(data)
    } catch (error) {
      res = {
        success: false,
        msg: '出参格式有误'
      }
    }
  }
  return res
}

module.exports = {
  formatTime: formatTime,
  baseUrl,
  changeBase64ToJson
}
