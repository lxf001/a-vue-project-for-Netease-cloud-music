import Vue from 'vue'
import Router from 'vue-router'

const index = () => import('pages/index'),
  music = () => import('pages/music'),
  playlist = () => import('pages/playlist'),
  song = () => import('pages/song'),
  high = () => import('pages/high'),
  hot = () => import('pages/hot'),
  news = () => import('pages/new'),
  rank = () => import('pages/rank')


  Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        needHead: true,
        alive: true
      },

    },
    {
      path: '/music',
      name: 'music',
      component: music,
      meta: {
        needHead: true,
        alive: true

      },
      children: [
        {
          path: 'high',
          name: 'high',
          meta: {
            needHead: true,
            alive: true
          },
          component: high
        },
        {
          path: 'hot',
          name: 'hot',
          meta: {
            needHead: true,
            alive: true
          },
          component: hot
        },
        {
          path: 'new',
          name: 'new',
          meta: {
            needHead: true,
            alive: true
          },
          component: news
        }
      ]
    },
    {
      path: '/playlist/:id',
      name: 'playlist',
      component: playlist,
      meta: {
        needHead: false,
        alive: false
      },
      props: true,
    },
    {
      path: '/song',
      name: 'song',
      component: song,
      meta: {
        closeBar: true,
        alive: false
      }
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank,
      meta: {
        needHead: true,
        alive: true
      }
    }
  ]
})
