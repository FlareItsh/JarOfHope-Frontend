<template>
  <div class="border-border/50 bg-background flex justify-between p-4 items-center relative z-50">
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
        class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm hover:bg-blue-200 transition focus:outline-none focus:ring-2 focus:ring-blue-500/50"
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
        class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-border/50 py-2 z-50 transform origin-top-right transition-all"
      >
        <div class="px-4 py-2 border-b border-gray-100 mb-1">
          <p class="text-sm font-semibold text-foreground">John Doe</p>
          <p class="text-xs text-muted-foreground truncate">john@example.com</p>
        </div>
        
        <button 
          @click="isProfileMenuOpen = false"
          class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition"
        >
          <Icon name="lucide:settings" class="w-4 h-4 text-gray-400" />
          Settings
        </button>
        
        <button 
          @click="isProfileMenuOpen = false"
          class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition"
        >
          <Icon name="lucide:log-out" class="w-4 h-4 text-red-400" />
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
