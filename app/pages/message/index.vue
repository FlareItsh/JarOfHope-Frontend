<script setup>
import { ref, reactive } from 'vue'

const isSubmitted = ref(false)
const isSubmitting = ref(false)

const form = reactive({
  category: '',
  message: '',
})

const accountForm = reactive({
  nickname: '',
  password: '',
})

const submitMessage = async () => {
  if (!form.message) return

  isSubmitting.value = true

  try {
    const data = await $api('/generate-nickname')
    accountForm.nickname = data.nickname || 'BraveFalcon' + Math.floor(Math.random() * 1000)
  } catch (e) {
    accountForm.nickname = 'BraveFalcon' + Math.floor(Math.random() * 1000)
  }

  // Wait for the animation to play before showing success screen
  await new Promise((resolve) => setTimeout(resolve, 1800))

  isSubmitting.value = false
  isSubmitted.value = true
}

const saveAccount = async (withPassword = true) => {
  if (!accountForm.nickname) return
  if (withPassword && !accountForm.password) return

  try {
    const payload = {
        category: form.category,
        message: form.message,
        nickname: accountForm.nickname,
    }
    
    if (withPassword) {
        payload.password = accountForm.password
    }

    const data = await $api('/messages', {
        method: 'POST',
        body: payload
    })

    if (data) {
        if (data.token) {
            localStorage.setItem('token', data.token)
        }
        
        if (withPassword) {
            window.location.href = '/student/chatbox'
        } else {
            window.location.href = '/'
        }
    } else {
        console.error(data.message || 'Failed to submit message')
    }
  } catch (e) {
      console.error(e.data?.message || 'Error submitting message.')
  }
}
</script>

<template>
  <main class="bg-background/50 flex min-h-screen flex-1 flex-col py-12">
    <div class="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
      <!-- Phase 1: Writing the Message -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
        mode="out-in"
      >
        <div
          v-if="!isSubmitted && !isSubmitting"
          class="bg-card border-border overflow-hidden rounded-2xl border shadow-sm"
        >
          <div class="px-6 py-8 sm:p-10">
            <h1 class="text-foreground font-primary mb-2 text-3xl font-bold">
              Drop a Message
            </h1>
            <p class="text-muted-foreground mb-8">
              Share your concerns, report issues, or provide feedback about
              school events and services. Your identity is completely hidden.
            </p>

            <form
              @submit.prevent="submitMessage"
              class="space-y-6"
            >
              <div>
                <label
                  for="category"
                  class="text-foreground mb-2 block text-sm font-medium"
                  >Category (Optional)</label
                >
                <select
                  id="category"
                  v-model="form.category"
                  class="bg-background border-border text-foreground focus:border-primary focus:ring-primary block w-full rounded-xl border px-4 py-3 focus:outline-none sm:text-sm"
                >
                  <option value="">Select a category...</option>
                  <option value="events">School Events</option>
                  <option value="facilities">Facilities & Equipment</option>
                  <option value="academics">Academic Services</option>
                  <option value="council">Student Council Feedback</option>
                  <option value="other">Other Concerns</option>
                </select>
              </div>

              <div>
                <label
                  for="message"
                  class="text-foreground mb-2 block text-sm font-medium"
                  >Your Message</label
                >
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  required
                  placeholder="Type your concern here..."
                  class="bg-background border-border text-foreground focus:border-primary focus:ring-primary block w-full resize-none rounded-xl border px-4 py-3 focus:outline-none sm:text-base"
                ></textarea>
              </div>

              <div class="flex justify-end pt-4">
                <AppButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  :disabled="!form.message"
                >
                  Drop Message
                </AppButton>
              </div>
            </form>
          </div>
        </div>

        <!-- Interstitial Animation: Dropping in Jar -->
        <div
          v-else-if="isSubmitting"
          class="bg-card border-border overflow-hidden rounded-2xl border shadow-sm flex flex-col items-center justify-center p-16 min-h-[450px]"
        >
          <div class="relative w-48 h-48 flex items-center justify-center">
            <!-- The Envelope (Dropping) -->
            <svg class="absolute top-0 w-16 h-16 text-primary drop-shadow-md animate-drop-in-jar z-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            
            <!-- The Jar -->
            <img src="/icons/logo.png" alt="Jar of Hope" class="absolute bottom-0 w-32 h-auto z-10 drop-shadow-xl" />
          </div>
          <h2 class="mt-8 text-xl font-bold text-foreground animate-pulse">Dropping into the jar...</h2>
        </div>

        <!-- Phase 2: Success & Account Creation -->
        <div
          v-else
          class="bg-card border-border overflow-hidden rounded-2xl border shadow-sm"
        >
          <div class="px-6 py-8 text-center sm:p-10">
            <div
              class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600"
            >
              <svg
                class="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>

            <h2 class="text-foreground mb-2 text-2xl font-bold">
              Message Delivered!
            </h2>
            <p class="text-muted-foreground mb-8">
              Your concern has been safely dropped into the jar.
            </p>

            <div
              class="bg-accent/30 border-accent mb-8 rounded-xl border p-6 text-left"
            >
              <h3
                class="text-foreground mb-2 flex items-center gap-2 font-bold"
              >
                <svg
                  class="text-primary h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
                Track Your Replies
              </h3>
              <p class="text-muted-foreground mb-6 text-sm">
                If you want to read responses from the council later, you can
                create a tracking account now. We've generated a random nickname
                for you, but feel free to change it.
                <br><br>
                <span class="text-amber-600 font-medium">Note: If you choose "No Thanks", you won't be able to log in to track your replies as a password is required to access the account later.</span>
              </p>

              <form
                @submit.prevent="saveAccount(true)"
                class="space-y-4"
              >
                <div>
                  <label
                    for="nickname"
                    class="text-foreground mb-1 block text-sm font-medium"
                    >Anonymous Nickname</label
                  >
                  <input
                    type="text"
                    id="nickname"
                    v-model="accountForm.nickname"
                    required
                    class="bg-background border-border text-foreground focus:border-primary focus:ring-primary block w-full rounded-lg border px-3 py-2 focus:outline-none sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="text-foreground mb-1 block text-sm font-medium"
                    >Create Password</label
                  >
                  <input
                    type="password"
                    id="password"
                    v-model="accountForm.password"
                    required
                    placeholder="Enter a memorable password"
                    class="bg-background border-border text-foreground focus:border-primary focus:ring-primary block w-full rounded-lg border px-3 py-2 focus:outline-none sm:text-sm"
                  />
                </div>
                <div class="flex flex-col gap-3 pt-4 sm:flex-row">
                  <AppButton
                    type="submit"
                    variant="primary"
                    class="w-full justify-center sm:flex-1"
                    :disabled="!accountForm.password || !accountForm.nickname"
                  >
                    Save Account & Track Replies
                  </AppButton>
                  <AppButton
                    type="button"
                    variant="outline"
                    @click="saveAccount(false)"
                    class="w-full justify-center text-center sm:flex-1"
                  >
                    No Thanks, Return Home
                  </AppButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </main>
</template>

<style scoped>
@keyframes dropInJar {
  0% { transform: translateY(-50px) scale(1) rotate(0deg); opacity: 0; }
  20% { opacity: 1; transform: translateY(-30px) scale(1) rotate(-5deg); }
  70% { transform: translateY(40px) scale(0.6) rotate(15deg); opacity: 1; }
  100% { transform: translateY(60px) scale(0.2) rotate(25deg); opacity: 0; }
}
.animate-drop-in-jar {
  animation: dropInJar 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
</style>
