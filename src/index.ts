import gotiny from './gotiny'
import portfolio from './portfolio'

const main = async () => {
  console.time('Time elapsed')
  console.log('\nStart testing: ' + new Date().toISOString())
  await gotiny()
  await portfolio()
  console.timeEnd('Time elapsed')
}

main()
