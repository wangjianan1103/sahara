import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/index/Index.vue'], resolve),
      children:[
        {
          path: '/',
          component: resolve => require(['../components/page/VueTable.vue'], resolve)
        },
        {
          path: '/dashboard',
          component: resolve => require(['../components/page/Dashboard.vue'], resolve)
        }
      ]
    }
  ]
})
