require('dotenv').config()
import util from 'util'
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_KEY)

export default async (id: string, data: string) => {
  sgMail.send({
    to: 'robbakel@gmail.com',
    from: process.env.SENDGRID_FROM,
    subject: id,
    text: util.format(data),
  })
}
