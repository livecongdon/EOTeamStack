/* eslint-disable */
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/account'
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/account'
      },
      {
        path: 'account',
        component: () => import('@/views/MyAccount.vue')
      },
      {
        path: 'team',
        component: () => import('@/views/MyTeam.vue')
      },
      {
        path: 'organization',
        component: () => import('@/views/OrgLevels.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
