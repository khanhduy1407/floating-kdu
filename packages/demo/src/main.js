import Kdu from 'kdu'
import KduRouter from 'kdu-router'
import KTooltip, { createTooltip, destroyTooltip } from 'k-tooltip'
import 'k-tooltip/dist/k-tooltip.css'
import App from './App.kdu'
import PageHome from './PageHome.kdu'
import PageInstall from './PageInstall.kdu'

Kdu.use(KTooltip, {
  disposeTimeout: 5000,
  themes: {
    dropdown: {
      popperOptions: {
        modifiers: {
          preventOverflow: {
            padding: 12,
          },
        },
      },
    },
    // Custom theme
    'info-tooltip': {
      $extend: 'tooltip',
      delay: {
        show: 800,
        hide: 500,
      },
    },
  },
})

KTooltip.options.delay = {
  show: 300,
  hide: 0,
}

console.log(KTooltip.options)

Kdu.use(KduRouter)

const router = new KduRouter({
  routes: [
    { path: '/', name: 'home', component: PageHome },
    { path: '/install', name: 'install', component: PageInstall },
    { path: '/table', name: 'table', component: () => import('./PageTable.kdu') },
    { path: '/hover-dropdown', name: 'hover-dropdown', component: () => import('./PageHoverDropdown.kdu') },
    { path: '*', redirect: '/' },
  ],
})

/* eslint-disable no-new */
new Kdu({
  el: '#app',
  router,
  render: h => h(App),
})

// Create tooltips without the directive
window.manualTooltip = () => {
  const el = document.querySelector('button')
  const tooltip = createTooltip(el, {
    content: 'This is a manual tooltip',
    placement: 'bottom',
    triggers: [],
  })
  tooltip.show()
  setTimeout(() => {
    destroyTooltip(el)
  }, 2000)
}
