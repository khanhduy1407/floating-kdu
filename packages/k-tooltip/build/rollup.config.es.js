import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'k-tooltip',
    file: 'dist/k-tooltip.esm.js',
    format: 'es',
    sourcemap: true,
  },
  external: [
    ...base.external,
    /^@popperjs/,
    'kdu-resize',
  ],
})

export default config
