import LoginView from '@/views/admin/LoginView'
import DashboardView from '@/views/admin/DashboardView'
import PostsView from '@/views/admin/PostsView'
import UploadsView from '@/views/admin/UploadsView'

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
    component: UploadsView
  },
  {
    path: '/admin/login',
    name: 'login',
    component: LoginView
  }
]
