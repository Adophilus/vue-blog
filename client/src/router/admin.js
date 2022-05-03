import LoginView from '@/views/admin/LoginView'
import DashboardView from '@/views/admin/DashboardView'
import PostsView from '@/views/admin/PostsView'

export default [
  {
    path: '/admin/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/admin/posts',
    name: 'admin-posts',
    component: PostsView
  },
  {
    path: '/admin/uploads',
    name: 'admin-uploads',
    component: PostsView
  },
  {
    path: '/admin/login',
    name: 'login',
    component: LoginView
  }
]
