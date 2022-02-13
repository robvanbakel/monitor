import postInvalidLink from './postInvalidLink'
import createShortLink from './createShortLink'
import retreiveLongLink from './retreiveLongLink'
import pingLandingPage from './pingLandingPage'

export default async () => {
  await postInvalidLink()
  await createShortLink()
  await retreiveLongLink()
  await pingLandingPage()
}
