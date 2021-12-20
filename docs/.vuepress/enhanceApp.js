import uninterest from 'uninterest'
import 'uninterest/lib/uninterest.css'

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(uninterest)
  }
}

