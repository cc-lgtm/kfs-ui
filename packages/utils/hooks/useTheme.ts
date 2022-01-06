import { onMounted } from 'vue'
import { toArray } from './../helper'

type ThemesType = {
  [key: string]: string
}
const useTheme = (themes: ThemesType) => {
  onMounted(() => {
    toArray(themes).forEach(theme => {
      const key = Object.keys(theme).join('')
      document.documentElement.style.setProperty(key, theme[key])
    })
  })
}

export default useTheme;
