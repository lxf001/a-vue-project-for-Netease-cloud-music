import Vue from 'vue'
import Router from 'vue-router'
import index from 'pages/index'
import music from 'pages/music'
import playlist from 'pages/playlist'
import song from 'pages/song'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        needHead: true,
        alive:true
      },

    },
    {
      path: '/music',
      name: 'music',
      component: music,
      meta: {
        needHead: true
      },
    },
    {
      path: '/playlist/:id',
      name: 'playlist',
      component: playlist,
      meta: {
        needHead: false,
        alive:false
      },
      props:true,
    },
    {
      path:'/song',
      name:'song',
      component:song,
      meta:{
        closeBar:true
      },
      props:true
    }
  ]
})
