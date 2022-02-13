import gotiny from './gotiny'
import portfolio from './portfolio'

const schedule = require('node-schedule')

console.log('Testing server started: ' + new Date().toISOString())

schedule.scheduleJob('0 * * * *', async () => {
  console.time('Time elapsed')
  console.log('\nStart testing: ' + new Date().toISOString())
  await gotiny()
  await portfolio()
  console.timeEnd('Time elapsed')
})
