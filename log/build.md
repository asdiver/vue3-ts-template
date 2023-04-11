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



加入配置文件commitlint.config.ts
