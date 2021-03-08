import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Post from '@/components/Post'
import TodoList from '@/components/TodoList'
import Form from '@/components/Form'
import VuexPlay from '@/components/VuexPlay'
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
      path: '/todolist',
      name: 'todolist',
      component: TodoList
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/vuexplay',
      name: 'vuexplay',
      component: VuexPlay
    }
  ]
})
