module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@fastcoder/eslint-config-vue',
  ],
  // cjs文件环境设置为node,一般都是作为配置文件
  overrides: [
    {
      files: ['*.cjs'],
      env: {
        node: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'filename-rules',
  ],
  rules: {
    // vue用大驼峰 ts用烧烤串
    'filename-rules/match': [2, { '.vue': 'PascalCase', '.ts': 'kebabcase' }],
  },
};
