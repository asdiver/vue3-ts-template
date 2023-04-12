import {createRouter, createWebHashHistory} from "vue-router"

// 这个只是实例，AppVue本身就是路由根入口，使用请删掉
import AppVue from "../App.vue"


// 路由结构
const routes = [
  { path: '/', component: AppVue },
]

// 3. 创建路由实例并传递 `routes` 配置
export default createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
