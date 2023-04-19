# vite+vue3+ts模板开发构建记录

有收获的话给个star吧~

### 引入vite

pnpm create vite

pnpm i

删除 tsconfig.node.json

### 新增src下的文件结构

api：调用后端接口

router：vue-router的路由

store：pinia全局参数 

views：页面组件

### 引入 pinia，vue-router包

pnpm add vue-router@4

pnpm add pinia

创建各自的初始调用代码

————至此，完成最最简单的第一版————

### 引入 commitlint和husky

pnpm add -d @commitlint/config-conventional @commitlint/cli 

pnpm add -d husky
配置：

初始化husky  pnpm dlx husky-init && pnpm install

加入配置文件commitlint.config.cjs

加入commitlint钩子命令 ： npx --no-install commitlint --edit $1（来自官网）

### 引入eslint

pnpm i eslint -D

初始化模板：eslint --init 得到配置文件的配置样式

新建eslint-extends文件夹，分化配置，以继承的方式结合

根据官方文档中创建规则中额外的一些库

*ts*

```
pnpm add --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

*vue*

```
pnpm add -D eslint-plugin-vue 
```

其他：

eslint安装后可能不会立马生效，可以重启vscode就好了

eslint配置cjs文件为node环境

```js
  "overrides": [
    {
      "files": ["*.cjs"],
      "env": {
        "node": true,
      },
    },
  ],
```

### 引入lint-staged

```
pnpm add lint-staged -D
```

添加配置文件 .lintstagedrc.js

添加钩子命令：

```
npx husky add .husky/pre-commit 'npx lint-staged'
```

测试成功

### eslint-plugin-filename-rules

( 额外加入，限制文件命名）

```
pnpm add-D eslint-plugin-filename-rules
```

```
  "rules": {
    // vue用大驼峰 ts用烧烤串
    'filename-rules/match': [2, { '.vue': 'PascalCase', '.ts': 'kebabcase' }],
  },
```

————完成v1.1 编码规范和git规范————

### 引入vitest

* 安装

```
pnpm add -D vitest
```

* 在script中加入测试命令

```
"test": "vitest watch"
```

### 引入@vue/test-utils

用于配合vitest测试vue组件

```
pnpm add --d @vue/test-utils
```





23.4.19

删除eslint-extend文件夹改用参与的仓库

```
pnpm add -D @fastcoder/eslint-config-vue
```
