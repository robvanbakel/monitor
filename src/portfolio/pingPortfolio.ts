import axios from 'axios'
import log from '../logger'
import path from 'path'

const id = [path.basename(__dirname), path.basename(__filename, '.js')].join('.')

export default async () => {
  try {
    const resCom = await axios.get('https://robvanbakel.com')
    const testsCom = [resCom.status === 200]
    if (!testsCom.every((test) => test)) return log.error(id, resCom)

    const resNL = await axios.get('https://robvanbakel.nl')
    const testsNl = [resNL.status === 200]
    if (!testsNl.every((test) => test)) return log.error(id, resNL)

    log.success(id)
  } catch (err: any) {
    log.error(id, err)
  }
}
