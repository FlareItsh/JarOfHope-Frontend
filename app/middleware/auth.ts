export default defineNuxtRouteMiddleware((to, from) => {
  // Replace this with your actual authentication logic
  const isAuthenticated = false // e.g., useCookie('token').value or a user state

  // If the user is not authenticated and trying to access a protected route
  if (!isAuthenticated && to.path !== '/login') {
    return navigateTo('/login')
  }

  // If the user is authenticated and trying to access the login page
  if (isAuthenticated && to.path === '/login') {
    return navigateTo('/')
  }
})
