import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SetupRoute from '../src/router/setup'

const routes: Array<RouteRecordRaw> = [
  ...SetupRoute
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
