import fs from 'fs'
import path from 'path'
import util from 'util'
import axios from 'axios'

export default {
  success(id: string) {
    console.log('✅ CHECK PASSED: ' + id)
  },
  error(id: string, data?: any) {
    console.log('❌ CHECK FAILED: ' + id)
    const fileName = `${new Date().toISOString()}_${id}`
    fs.createWriteStream(path.join(process.cwd(), 'logs', fileName + '.log')).write(util.format(data))
    axios.get('https://api.getping.info/tQigyGMu/' + fileName)
  },
}
