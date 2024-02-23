import { createApp } from 'vue'
import App from './App.vue'
// 导入路由配置
import router from './router'
// 导入Pinia
import pinia from './store'
// 重置样式
import "normalize.css"
import "./assets/css/index.css"


createApp(App).use(router).use(pinia).mount('#app')
