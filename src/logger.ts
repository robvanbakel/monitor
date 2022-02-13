import notify from './helpers/sendGrid'

export default {
  success(id: string) {
    console.log('✅ CHECK PASSED: ' + id)
  },
  error(id: string, data?: any) {
    console.log('❌ CHECK FAILED: ' + id)
    notify(id, data)
  },
}
