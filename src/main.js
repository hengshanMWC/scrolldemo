import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App'
import routes from './routes'
import 'normalize.css/normalize.css'
import 'uno.css'
import './styles/variables.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router).use(createPinia())

// 关于 tailwind 的 preflight 样式
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

// 优先级比naive-ui高
import('./styles/index.scss')

app.mount('#app')
