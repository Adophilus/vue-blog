import LoginView from '@/views/admin/LoginView'
import DashboardView from '@/views/admin/DashboardView'

export default [
  {
    path: '/admin/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/admin/login',
    name: 'login',
    component: LoginView
  }
]
