<template>
  <div
    class="border-border bg-background relative z-50 flex items-center justify-between border px-6 py-4"
  >
    <a href="/">
      <div class="flex items-center">
        <div class="shrink-0">
          <img
            src="/icons/logo.png"
            alt="Jar of Hope"
            class="h-12 w-auto"
          />
        </div>
        <span class="text-2xl font-bold">
          <span>Jar</span>
          <span class="text-primary">Of</span>
          <span class="text-amber-400">Hope</span>
        </span>
      </div>
    </a>

    <!-- Profile with Initials -->
    <div class="relative">
      <button
        @click="isProfileMenuOpen = !isProfileMenuOpen"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 transition hover:bg-blue-200 focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
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

        <button
          @click="isProfileMenuOpen = false"
          class="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-50"
        >
          <Icon
            name="lucide:settings"
            class="h-4 w-4 text-gray-400"
          />
          Settings
        </button>

        <button
          @click="isProfileMenuOpen = false"
          class="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-red-600 transition hover:bg-red-50"
        >
          <Icon
            name="lucide:log-out"
            class="h-4 w-4 text-red-400"
          />
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isProfileMenuOpen = ref(false)
</script>
