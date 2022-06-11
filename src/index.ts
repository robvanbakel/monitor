import schedule from 'node-schedule'

import gotiny from './gotiny'
import portfolio from './portfolio'
import dumpertbot from './dumpertbot'
import spark from './spark'

const main = async () => {
  console.time('Time elapsed')
  console.log('\nStart testing: ' + new Date().toISOString())
  await gotiny()
  await portfolio()
  await dumpertbot()
  await spark()
  console.timeEnd('Time elapsed')
}

schedule.scheduleJob(`*/20 * * * *`, main);
