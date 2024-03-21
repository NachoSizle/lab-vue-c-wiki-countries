import { createRouter, createWebHistory  } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CountryDetailsView from '@/views/CountryDetailsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      children: [
        {
          path: ':alpha3Code',
          name: 'CountryDetail',
          component: CountryDetailsView,
        }
      ]
    },
  ]
})

export default router