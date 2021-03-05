import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Post from '@/components/Post'
import Forms from '@/components/Forms'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/form',
      name: 'form',
      component: Forms
    }
  ]
})
