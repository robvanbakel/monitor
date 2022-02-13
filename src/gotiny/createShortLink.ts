import axios from 'axios'
import log from '../logger'
import path from 'path'

const id = [path.basename(__dirname), path.basename(__filename, '.js')].join('.')

export default async () => {
  try {
    const testLink = 'bol.com'

    const res = await axios.post('https://gotiny.cc/api', { input: testLink })

    const tests = [res.status === 200, res.data[0].long === testLink, typeof res.data[0].code === 'string']

    if (!tests.every((test) => test)) return log.error(id, res)

    log.success(id)
  } catch (err: any) {
    log.error(id, err)
  }
}
