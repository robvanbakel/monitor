import gotiny from './gotiny'
import portfolio from './portfolio'
import dumpertbot from './dumpertbot'

const main = async () => {
  console.time('Time elapsed')
  console.log('\nStart testing: ' + new Date().toISOString())
  await gotiny()
  await portfolio()
  await dumpertbot()
  console.timeEnd('Time elapsed')
}

main()
