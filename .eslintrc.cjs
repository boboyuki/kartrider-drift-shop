module.exports = {
  env: {
    browser: true,
    es2023: true,
    node: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-undef': 'off',
    'prettier/prettier': 'error'
  }
}
