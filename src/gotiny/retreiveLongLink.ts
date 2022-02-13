import axios from 'axios'
import log from '../logger'
import path from 'path'

const id = [path.basename(__dirname), path.basename(__filename, '.js')].join('.')

export default async () => {
  try {
    const res = await axios.get('https://gotiny.cc/api/y68hxc')

    const tests = [res.status === 200, res.data === 'https://amazon.com/very-long-url']

    if (!tests.every((test) => test)) return log.error(id, res)

    log.success(id)
  } catch (err: any) {
    log.error(id, err)
  }
}
