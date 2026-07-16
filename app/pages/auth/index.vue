<template>
  <div
    class="bg-background relative flex min-h-screen flex-col justify-center overflow-hidden py-12 sm:px-6 lg:px-8"
  >
    <!-- Background decorations -->
    <div
      class="bg-primary/10 pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl"
    ></div>
    <div
      class="bg-secondary/10 pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full blur-3xl"
    ></div>

    <div class="relative z-10 sm:mx-auto sm:w-full sm:max-w-md">
      <a href="/">
        <div class="flex flex-col items-center justify-center gap-4">
          <img
            src="/icons/logo.png"
            alt="Jar of Hope"
            class="h-16 w-auto drop-shadow-sm transition-transform duration-300 hover:scale-105"
          />
          <span class="text-2xl font-bold">
            <span class="text-foreground">Jar</span>
            <span class="text-primary">Of</span>
            <span class="text-amber-400">Hope</span>
          </span>
        </div>
      </a>
      <h2
        class="text-foreground mt-6 text-center text-3xl font-extrabold tracking-tight"
      >
        Welcome Back
      </h2>
    </div>

    <div class="relative z-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        class="bg-card border-border bg-card/90 border px-4 py-8 shadow-xl backdrop-blur-md sm:rounded-xl sm:px-10"
      >
        <form
          class="space-y-6"
          @submit.prevent="handleLogin"
        >
          <div>
            <label
              for="email"
              class="text-foreground block text-sm font-medium"
            >
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                v-model="email"
                class="border-input placeholder-muted-foreground focus:ring-primary focus:border-primary bg-background text-foreground block w-full appearance-none rounded-md border px-3 py-2 shadow-sm transition-shadow focus:ring-2 focus:outline-none sm:text-sm"
                placeholder="nickname123"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="text-foreground block text-sm font-medium"
            >
              Password
            </label>
            <div class="relative mt-1">
              <input
                id="password"
                name="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                required
                v-model="password"
                class="border-input placeholder-muted-foreground focus:ring-primary focus:border-primary bg-background text-foreground block w-full appearance-none rounded-md border px-3 py-2 pr-10 shadow-sm transition-shadow focus:ring-2 focus:outline-none sm:text-sm"
                placeholder="••••••••"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="text-muted-foreground hover:text-foreground absolute inset-y-0 right-0 flex items-center pr-3 transition-colors"
              >
                <!-- Eye open -->
                <svg
                  v-if="!showPassword"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                  />
                </svg>
                <!-- Eye closed -->
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path
                    d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                  />
                  <path
                    d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                  />
                  <line
                    x1="2"
                    x2="22"
                    y1="2"
                    y2="22"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                v-model="rememberMe"
                class="text-primary focus:ring-primary border-input bg-background h-4 w-4 rounded"
              />
              <label
                for="remember-me"
                class="text-foreground ml-2 block text-sm"
              >
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <AppButton
              variant="primary"
              class="flex w-full justify-center py-2.5 transition-transform active:scale-[0.98]"
              type="submit"
            >
              Sign in
            </AppButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

const handleLogin = () => {
  console.log('Login attempt with:', email.value)
  // Integrate with your authentication logic here
}
</script>
