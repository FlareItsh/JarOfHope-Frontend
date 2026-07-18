<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
  // Reset after animation
  setTimeout(() => {
    isSubmitted.value = false
    form.category = ''
    form.message = ''
  }, 300)
}

const isSubmitted = ref(false)
const isSubmitting = ref(false)

const form = reactive({
  category: '',
  message: '',
})

const submitMessage = async () => {
  if (!form.message) return

  isSubmitting.value = true
  await new Promise((resolve) => setTimeout(resolve, 1000))
  isSubmitting.value = false
  isSubmitted.value = true
}
</script>

<template>
  <AppModal
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    :title="isSubmitted ? 'Success' : 'New Message'"
  >
    <div class="px-2 py-4">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
        mode="out-in"
      >
        <div v-if="!isSubmitted">
          <p class="text-muted-foreground mb-6 text-sm">
            Share your concerns, report issues, or provide feedback about
            school events and services.
          </p>

          <form @submit.prevent="submitMessage" class="space-y-5">
            <div>
              <label for="category" class="text-foreground mb-2 block text-sm font-medium">
                Category (Optional)
              </label>
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
              <label for="message" class="text-foreground mb-2 block text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                placeholder="Type your concern here..."
                class="bg-background border-border text-foreground focus:border-primary focus:ring-primary block w-full resize-none rounded-xl border px-4 py-3 focus:outline-none sm:text-base"
              ></textarea>
            </div>

            <div class="flex justify-end gap-3 pt-4 border-t border-border/50">
              <AppButton type="button" variant="outline" @click="close">Cancel</AppButton>
              <AppButton
                type="submit"
                variant="primary"
                :disabled="!form.message || isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </AppButton>
            </div>
          </form>
        </div>

        <div v-else class="flex flex-col items-center py-6 text-center">
          <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 class="text-foreground mb-2 text-xl font-bold">Message Delivered!</h2>
          <p class="text-muted-foreground mb-8 text-sm">
            Your concern has been safely dropped into the jar. We will reply to this thread soon.
          </p>
          <AppButton variant="primary" class="w-full justify-center" @click="close">Close</AppButton>
        </div>
      </Transition>
    </div>
  </AppModal>
</template>
