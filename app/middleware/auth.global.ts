export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token')
  const isAuthenticated = !!token.value

  // Define public routes that don't require authentication
  const publicRoutes = ['/', '/auth/sign-in', '/message']

  // If the user is not authenticated and trying to access a protected route
  if (!isAuthenticated && !publicRoutes.includes(to.path)) {
    return navigateTo('/auth/sign-in')
  }

  // If the user is authenticated and trying to access the login page
  if (isAuthenticated && to.path === '/auth/sign-in') {
    return navigateTo('/chatbox')
  }
})
