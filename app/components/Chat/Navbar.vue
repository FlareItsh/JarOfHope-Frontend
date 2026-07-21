<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const isProfileMenuOpen = ref(false)

import { AuthService } from '~/api/auth/AuthService'

const authService = new AuthService()
const showConfirmLogout = ref(false)
const isLoggingOut = ref(false)

const handleLogout = () => {
  showConfirmLogout.value = true
}

const confirmLogout = async () => {
  isLoggingOut.value = true
  try {
    await authService.logout()
  } catch (error) {
    console.error('Logout failed:', error)
  } finally {
    if (import.meta.client) {
      localStorage.removeItem('token')
      localStorage.removeItem('uuid')
      localStorage.removeItem('role')
      localStorage.removeItem('user')
    }

    showConfirmLogout.value = false
    isLoggingOut.value = false
    navigateTo('/')
  }
}
</script>

<template>
  <div
    :class="[
      'border-border/60 bg-background/80 sticky top-0 z-50 flex items-center justify-between border-b px-6 backdrop-blur-md transition-all duration-300',
      isScrolled ? 'py-2 shadow-sm' : 'py-4',
    ]"
  >
    <a href="/">
      <div class="flex items-center">
        <div class="mr-3 shrink-0">
          <img
            src="/icons/logo.png"
            alt="Jar of Hope"
            :class="[
              'w-auto drop-shadow-sm transition-all duration-300',
              isScrolled ? 'h-8' : 'h-10',
            ]"
          />
        </div>
        <span
          :class="[
            'font-bold tracking-tight transition-all duration-300',
            isScrolled ? 'text-xl' : 'text-2xl',
          ]"
        >
          <span class="text-foreground">Jar</span>
          <span class="text-primary">Of</span>
          <span class="text-amber-500">Hope</span>
        </span>
      </div>
    </a>

    <!-- Profile with Initials -->
    <div class="relative">
      <button
        @click="isProfileMenuOpen = !isProfileMenuOpen"
        class="bg-primary/10 text-primary hover:bg-primary/20 ring-primary/30 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold uppercase transition-all duration-200 hover:scale-105 hover:shadow-sm focus:ring-2 focus:outline-none"
      >
        JD
      </button>

      <!-- Click Outside Overlay -->
      <div
        v-if="isProfileMenuOpen"
        @click="isProfileMenuOpen = false"
        class="fixed inset-0 z-40"
      ></div>

      <!-- Dropdown Menu -->
      <div
        v-if="isProfileMenuOpen"
        class="border-border/50 absolute right-0 z-50 mt-2 w-48 origin-top-right transform rounded-xl border bg-white py-2 shadow-lg transition-all"
      >
        <div class="mb-1 border-b border-gray-100 px-4 py-2">
          <p class="text-foreground text-sm font-semibold">John Doe</p>
          <p class="text-muted-foreground truncate text-xs">john@example.com</p>
        </div>

        <AppButton
          variant="ghost"
          @click="isProfileMenuOpen = false"
          class="flex w-full justify-start gap-2 px-4 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-50"
        >
          <Icon
            name="lucide:settings"
            class="h-4 w-4 text-gray-400"
          />
          Settings
        </AppButton>

        <AppButton
          variant="ghost"
          @click="confirmLogout"
          :disabled="isLoggingOut"
          class="flex w-full justify-start gap-2 px-4 py-2 text-left text-sm text-red-600 transition hover:bg-red-50 hover:text-red-700"
        >
          <Icon
            name="lucide:log-out"
            class="h-4 w-4 text-red-400"
          />
          Logout
        </AppButton>
      </div>
    </div>
  </div>
</template>
