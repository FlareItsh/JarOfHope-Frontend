export default defineNuxtRouteMiddleware((to, from) => {
  // If we are on the server, skip auth check because we use localStorage
  if (import.meta.server) return

  const token = localStorage.getItem('token')
  const isAuthenticated = !!token

  // Define public routes that don't require authentication
  const publicRoutes = ['/', '/auth/sign-in', '/message']

  // If the user is not authenticated and trying to access a protected route
  if (!isAuthenticated && !publicRoutes.includes(to.path)) {
    return navigateTo('/auth/sign-in')
  }

  // If the user is authenticated and trying to access the login page
  if (isAuthenticated && to.path === '/auth/sign-in') {
    const userStr = localStorage.getItem('user')
    const user = userStr ? JSON.parse(userStr) : null

    if (user?.role === 'admin') {
      return navigateTo('/admin/chatbox')
    } else {
      return navigateTo('/student/chatbox')
    }
  }
})
