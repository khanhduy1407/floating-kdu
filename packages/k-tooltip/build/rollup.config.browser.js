import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'
import analyze from 'rollup-plugin-analyzer'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'KTooltip',
    file: 'dist/k-tooltip.min.js',
    format: 'iife',
    sourcemap: true,
    globals: {
      kdu: 'Kdu',
    },
  },
})

config.plugins.push(analyze())
config.plugins.push(terser())

export default config
