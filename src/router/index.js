import Vue from 'vue'
import Router from 'vue-router'
import start from '@/views/Start'
import call from '@/views/Call'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/start',
      name: 'HelloWorld',
      component: start
    },
    {
      path: '/',
      name: 'Call',
      component: call
    }
  ]
})
