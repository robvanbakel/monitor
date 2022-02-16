const htmlparser2 = require('htmlparser2')

import axios from 'axios'
import dayjs from 'dayjs'
import path from 'path'

import log from '../logger'
import twitter from './helpers/twitter'

const id = [path.basename(__dirname), path.basename(__filename, '.js')].join('.')

interface Post {
  pubDate: Date
  link: string
}

export default async () => {
  try {
    const res = await axios.get('https://api-live.dumpert.nl/mobile_api/json/rss')

    // Find first post that is > 15 minutes old
    const checkPost = htmlparser2.parseFeed(res.data).items.find((post: Post) => {
      return dayjs().diff(dayjs(post.pubDate), 'm') > 15
    })

    const timelineRes = await twitter.userTimeline('1295086337280876544')
    const timeline = timelineRes._realData.data

    let found = false

    // Check if found post has been tweeted
    for (const tweet of timeline) {
      const shortUrl = tweet.text.split(' ').pop()
      const fullUrlRes = await axios.get(shortUrl)
      const fullUrl = fullUrlRes.request.socket._httpMessage.res.responseUrl

      if (fullUrl === checkPost.link) {
        found = true
        break
      }
    }

    const tests = [found]

    if (!tests.every((test) => test)) return log.error(id, res)

    log.success(id)
  } catch (err: any) {
    log.error(id, err)
  }
}
