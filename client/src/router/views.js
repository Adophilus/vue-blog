import PostView from '@/views/PostView'
import RecentPostsView from '@/views/RecentPostsView'

export default [
  {
    path: '/',
    name: 'landing',
    component: RecentPostsView
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostView
  },
  {
    path: '/post',
    name: 'posts',
    component: RecentPostsView
  }
]
