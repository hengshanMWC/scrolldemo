module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    '@antfu/eslint-config-vue',
    // 新增，必须放在最后面
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': 'off',
    curly: 'off',
    'no-new-func': 0,
    'no-fallthrough': 'off',
    'n/prefer-global/process': 'off',
    indent: 'off',
    'brace-style': 'off',
    '@stylistic/ts/brace-style': 'off',
    'max-attributes-per-line': 'off',

    'promise/param-names': 'off',

    'jsdoc/check-alignment': 'off',

    'html/singleline-max-attributes': 'off',

    '@stylistic/js/no-tabs': 'off',
    '@stylistic/js/no-trailing-spaces': 'off',
    '@stylistic/js/operator-linebreak': 'off',

    'antfu/if-newline': 'off',

    // 希望打开的
    'prefer-promise-reject-errors': 'off',

    'vue/multi-word-component-names': 'off',
  },
}
