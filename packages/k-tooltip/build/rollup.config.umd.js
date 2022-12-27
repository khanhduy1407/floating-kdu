import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'k-tooltip',
    file: 'dist/k-tooltip.umd.js',
    format: 'umd',
    sourcemap: true,
  },
})

export default config
