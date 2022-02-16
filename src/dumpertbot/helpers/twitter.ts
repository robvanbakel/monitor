const { TwitterApi } = require('twitter-api-v2')

const { v2: twitter } = new TwitterApi({
  appKey: process.env.TWITTER_APPKEY,
  appSecret: process.env.TWITTER_APPSECRET,
  accessToken: process.env.TWITTER_ACCESSTOKEN,
  accessSecret: process.env.TWITTER_ACCESSSECRET,
})

export default twitter