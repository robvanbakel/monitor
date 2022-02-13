require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.GOTINY_MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })

const goTinySchema = new mongoose.Schema({
  code: {
    type: String,
  },
})

export default mongoose.model('GoTiny', goTinySchema, 'gotiny')
