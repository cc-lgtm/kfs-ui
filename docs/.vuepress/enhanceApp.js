import KfsUi from 'kfs-ui'
import 'kfs-ui/lib/index.css'

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(KfsUi)
  }
}

