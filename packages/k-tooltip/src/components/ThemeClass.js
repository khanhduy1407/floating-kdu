import { getThemeClasses } from '../config'

// @kdujs/component
export default {
  computed: {
    themeClass () {
      return getThemeClasses(this.theme)
    },
  },
}
