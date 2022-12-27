module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:kdu/essential',
    '@kdujs/standard',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
