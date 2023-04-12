module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    './eslint-extends/vue3-ts-eslint.cjs',
  ],
  // cjs文件环境设置为node,一般都是作为配置文件
  "overrides": [
    {
      "files": ["*.cjs"],
      "env": {
        "node": true,
      },
    },
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
  ],
  "rules": {
  },
}
