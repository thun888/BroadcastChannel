import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  astro: true,
  pnpm: false,
  ignores: ['**/*'],
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
  },
})
