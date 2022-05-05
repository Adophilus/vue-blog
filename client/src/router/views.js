import AboutView from '@/views/AboutView'
import ContactView from '@/views/ContactView'
import LandingView from '@/views/LandingView'
import PostView from '@/views/PostView'
import RecentPostsView from '@/views/RecentPostsView'

export default [
  {
    path: '/',
    name: 'landing',
    component: LandingView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/posts/:slug',
    name: 'post',
    component: PostView
  },
  {
    path: '/posts',
    name: 'recent-posts',
    component: RecentPostsView
  }
]
