<template>
  <header class="bg-background border-border border-b">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <a href="/">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                src="/icons/logo.png"
                alt="Jar of Hope"
                class="h-12 w-auto"
              />
            </div>
            <span class="text-2xl font-bold">
              <span>Jar</span>
              <span class="text-primary">Of</span>
              <span class="text-secondary">Hope</span>
            </span>
          </div></a
        >
        <div class="flex items-center">
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                class="text-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors"
                >Home</a
              >
              <a
                href="#"
                class="text-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors"
                >About</a
              >
              <a
                href="#footer"
                class="text-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors"
                >Credits</a
              >
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <AppButton variant="primary">Sign In</AppButton>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button
            @click="isMobileMenuOpen = true"
            class="bg-accent hover:bg-accent/80 text-muted-foreground hover:text-foreground inline-flex items-center justify-center rounded-md p-2"
          >
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu sliding side panel -->
    <Transition
      enter-active-class="transition-opacity ease-linear duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isMobileMenuOpen"
        class="fixed inset-0 z-40 bg-black/50 md:hidden"
        @click="isMobileMenuOpen = false"
      ></div>
    </Transition>

    <Transition
      enter-active-class="transition ease-in-out duration-300 transform"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition ease-in-out duration-300 transform"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-show="isMobileMenuOpen"
        class="bg-background fixed inset-y-0 right-0 z-50 flex h-full w-64 flex-col overflow-y-auto shadow-xl md:hidden"
      >
        <div
          class="border-border flex items-center justify-between border-b px-4 pt-5 pb-4"
        >
          <img
            src="/icons/logo.png"
            alt="Jar of Hope"
            class="h-10 w-auto"
          />
          <button
            @click="isMobileMenuOpen = false"
            class="text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 focus:outline-none"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-2 space-y-1 px-2 py-4">
          <a
            href="#"
            class="text-foreground hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-base font-medium transition-colors"
            >Home</a
          >
          <a
            href="#"
            class="text-foreground hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-base font-medium transition-colors"
            >About</a
          >
          <a
            href="#footer"
            class="text-foreground hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-base font-medium transition-colors"
            >Credits</a
          >
        </div>
        <div class="border-border mt-auto border-t pt-4 pb-6">
          <div class="px-4">
            <AppButton
              variant="primary"
              class="w-full"
              >Sign In</AppButton
            >
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>
