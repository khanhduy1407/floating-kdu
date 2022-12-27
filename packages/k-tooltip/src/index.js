import { assign } from './util/assign-deep'
import { config } from './config'
import 'kdu-resize/dist/kdu-resize.css'
// Components
import PrivateDropdown from './components/Dropdown.kdu'
import PrivateMenu from './components/Menu.kdu'
import PrivatePopper from './components/Popper'
import PrivatePopperContent from './components/PopperContent.kdu'
import PrivatePopperMethods from './components/PopperMethods'
import PrivatePopperWrapper from './components/PopperWrapper.kdu'
import PrivateThemeClass from './components/ThemeClass'
import PrivateTooltip from './components/Tooltip.kdu'
import PrivateTooltipDirective from './components/TooltipDirective.kdu'
// Directives
import PrivateKTooltip from './directives/k-tooltip'
import PrivateKClosePopper from './directives/k-close-popper'

/* Exports */

export const options = config
// Directive
export const KTooltip = PrivateKTooltip
export { createTooltip, destroyTooltip } from './directives/k-tooltip'
export const KClosePopper = PrivateKClosePopper
// Components
export const Dropdown = PrivateDropdown
export const Menu = PrivateMenu
export const Popper = PrivatePopper
export const PopperContent = PrivatePopperContent
export const PopperMethods = PrivatePopperMethods
export const PopperWrapper = PrivatePopperWrapper
export const ThemeClass = PrivateThemeClass
export const Tooltip = PrivateTooltip
export const TooltipDirective = PrivateTooltipDirective

/* Kdu plugin */

export function install (Kdu, options = {}) {
  if (install.installed) return
  install.installed = true

  assign(config, options)

  // Directive
  Kdu.directive('tooltip', PrivateKTooltip)
  Kdu.directive('close-popper', PrivateKClosePopper)
  // Components
  // eslint-disable-next-line kdu/component-definition-name-casing
  Kdu.component('k-tooltip', PrivateTooltip)
  Kdu.component('KTooltip', PrivateTooltip)
  // eslint-disable-next-line kdu/component-definition-name-casing
  Kdu.component('k-dropdown', PrivateDropdown)
  Kdu.component('KDropdown', PrivateDropdown)
  // eslint-disable-next-line kdu/component-definition-name-casing
  Kdu.component('k-menu', PrivateMenu)
  Kdu.component('KMenu', PrivateMenu)
}

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install,
  options: config,
}

// Auto-install
let GlobalKdu = null
if (typeof window !== 'undefined') {
  GlobalKdu = window.Kdu
} else if (typeof global !== 'undefined') {
  GlobalKdu = global.Kdu
}
if (GlobalKdu) {
  GlobalKdu.use(plugin)
}

export default plugin
