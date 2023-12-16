import Layout from 'src/layout/index.vue'
import Marketplace from './pages/Marketplace/Marketplace.vue'
import Market from './pages/Marketplace/Market.vue'

const routes = [
  {
    path: '/',
    redirect: { name: 'a' },
    component: Layout,
    children: [
      {
        path: 'a',
        component: Marketplace,
        name: 'b',
        children: [
          {
            path: 'c',
            component: Market,
            name: 'a',
          },
        ],
      },
    ],
  },
]

export default routes
