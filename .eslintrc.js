module.exports = {
  env: { es6: true, jest: true, node: true },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: { ecmaVersion: 2018, sourceType: 'module' },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'new-cap': 1,
    'no-console': 'off',
    'no-param-reassign': ['off', { props: false }],
    'no-plusplus': ['off', { allowForLoopAfterthoughts: true }],
    'no-await-in-loop': 'off',
    'no-unused-expressions': 'off'
  }
};
