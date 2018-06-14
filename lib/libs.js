const axios = require('axios')
const {BASE_URL, USER_NAME, API_KEY} = require('../config')
const endPoint = require('./endPoint')
const xmlBuild = require('./xmlBuild')
const wsse = require('wsse')
const token = wsse({username: USER_NAME, password: API_KEY})
const WSSEHeader = token.getWSSEHeader({nonceBase64: true})

module.exports = {
  getEntry: () => axios.create({
    baseURL: BASE_URL,
    headers: Object.assign({
      'X-WSSE': WSSEHeader
    })
  }).get(endPoint.get('エントリー一覧取得')).catch((error) => console.log(error)),

  postEntry: (data = {}) => axios.create({
    baseURL: BASE_URL,
    headers: {
      'X-WSSE': WSSEHeader
    }
  }).post(endPoint.get('エントリー投稿'), xmlBuild(data)).catch((error) => console.log(error))
}