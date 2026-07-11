<template>
  <AppNavbar class="sticky top-0 z-50" />

  <main class="flex min-h-screen flex-1 flex-col bg-background/50 py-12">
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
        <div v-if="!isSubmitted" class="bg-card border-border rounded-2xl border shadow-sm overflow-hidden">
          <div class="px-6 py-8 sm:p-10">
            <h1 class="text-3xl font-bold text-foreground font-primary mb-2">Drop a Message</h1>
            <p class="text-muted-foreground mb-8">
              Share your concerns, report issues, or provide feedback about school events and services. Your identity is completely hidden.
            </p>

            <form @submit.prevent="submitMessage" class="space-y-6">
              <div>
                <label for="category" class="block text-sm font-medium text-foreground mb-2">Category (Optional)</label>
                <select 
                  id="category" 
                  v-model="form.category"
                  class="bg-background border-border text-foreground block w-full rounded-xl border px-4 py-3 focus:border-primary focus:ring-primary focus:outline-none sm:text-sm"
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
                <label for="message" class="block text-sm font-medium text-foreground mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  rows="6" 
                  required
                  placeholder="Type your concern here..."
                  class="bg-background border-border text-foreground block w-full rounded-xl border px-4 py-3 focus:border-primary focus:ring-primary focus:outline-none sm:text-base resize-none"
                ></textarea>
              </div>

              <div class="pt-4 flex justify-end">
                <AppButton type="submit" variant="primary" size="lg" :disabled="!form.message || isSubmitting">
                  {{ isSubmitting ? 'Sending...' : 'Send Anonymously' }}
                </AppButton>
              </div>
            </form>
          </div>
        </div>

        <!-- Phase 2: Success & Account Creation -->
        <div v-else class="bg-card border-border rounded-2xl border shadow-sm overflow-hidden">
          <div class="px-6 py-8 sm:p-10 text-center">
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h2 class="text-2xl font-bold text-foreground mb-2">Message Delivered!</h2>
            <p class="text-muted-foreground mb-8">
              Your concern has been safely dropped into the jar.
            </p>

            <div class="bg-accent/30 border border-accent rounded-xl p-6 text-left mb-8">
              <h3 class="font-bold text-foreground mb-2 flex items-center gap-2">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                Track Your Replies
              </h3>
              <p class="text-sm text-muted-foreground mb-6">
                If you want to read responses from the council later, you can create a tracking account now. We've generated a random nickname for you, but feel free to change it.
              </p>

              <form @submit.prevent="saveAccount" class="space-y-4">
                <div>
                  <label for="nickname" class="block text-sm font-medium text-foreground mb-1">Anonymous Nickname</label>
                  <input 
                    type="text" 
                    id="nickname" 
                    v-model="accountForm.nickname"
                    required
                    class="bg-background border-border text-foreground block w-full rounded-lg border px-3 py-2 focus:border-primary focus:ring-primary focus:outline-none sm:text-sm"
                  />
                </div>
                <div>
                  <label for="password" class="block text-sm font-medium text-foreground mb-1">Create Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    v-model="accountForm.password"
                    required
                    placeholder="Enter a memorable password"
                    class="bg-background border-border text-foreground block w-full rounded-lg border px-3 py-2 focus:border-primary focus:ring-primary focus:outline-none sm:text-sm"
                  />
                </div>
                <div class="pt-4 flex flex-col sm:flex-row gap-3">
                  <AppButton type="submit" variant="primary" class="w-full sm:flex-1 justify-center" :disabled="!accountForm.password || !accountForm.nickname">
                    Save Account & Track Replies
                  </AppButton>
                  <AppButton type="button" variant="outline" href="/" class="w-full sm:flex-1 text-center justify-center">
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

  <AppFooter />
</template>

<script setup>
import { ref, reactive } from 'vue'

const isSubmitted = ref(false)
const isSubmitting = ref(false)

const form = reactive({
  category: '',
  message: ''
})

const accountForm = reactive({
  nickname: 'BraveFalcon' + Math.floor(Math.random() * 1000),
  password: ''
})

const submitMessage = async () => {
  if (!form.message) return
  
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  isSubmitting.value = false
  isSubmitted.value = true
}

const saveAccount = () => {
  if (!accountForm.nickname || !accountForm.password) return
  
  // Here you would typically link the credentials to the newly created message thread
  alert(`Account saved! Nickname: ${accountForm.nickname}`)
  
  // Redirect to dashboard or home
  window.location.href = '/'
}
</script>
