<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  message: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}

const showReplyInput = ref(false)
const replyText = ref('')
const replies = ref([])
const isSending = ref(false)
const attachments = ref([])
const fileInput = ref(null)

const handleFileSelect = (event) => {
  const files = Array.from(event.target.files)
  files.forEach(file => {
    attachments.value.push({
      file,
      name: file.name,
      isImage: file.type.startsWith('image/'),
      url: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
    })
  })
  if (fileInput.value) fileInput.value.value = ''
}

const removeAttachment = (index) => {
  const att = attachments.value[index]
  if (att.url) URL.revokeObjectURL(att.url)
  attachments.value.splice(index, 1)
}

const sendReply = async () => {
  if (!replyText.value.trim() && attachments.value.length === 0) return
  
  isSending.value = true
  await new Promise(resolve => setTimeout(resolve, 500))
  
  replies.value.push({
    uuid: crypto.randomUUID(),
    author: 'You',
    initials: 'JD',
    time: 'Just now',
    message: replyText.value,
    attachments: [...attachments.value],
    isSelf: true
  })
  
  replyText.value = ''
  attachments.value = []
  isSending.value = false
}

// Reset state when modal opens/closes
watch(() => props.modelValue, (isOpen) => {
  if (!isOpen) {
    showReplyInput.value = false
    replyText.value = ''
    replies.value = []
    attachments.value.forEach(att => att.url && URL.revokeObjectURL(att.url))
    attachments.value = []
  }
})
</script>

<template>
  <AppModal
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    :title="message ? 'Message Details' : ''"
  >
    <div v-if="message" class="flex flex-col gap-6">
      
      <!-- Original Message -->
      <div class="flex flex-col gap-4">
        <div class="border-border/50 flex items-center justify-between border-b pb-4">
          <div class="flex items-center gap-3">
            <div class="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold uppercase">
              {{ message.initials }}
            </div>
            <div>
              <h3 class="font-primary text-base font-semibold">@{{ message.author }}</h3>
              <p class="text-muted-foreground text-sm">{{ message.time }}</p>
            </div>
          </div>
          
          <span class="bg-primary/5 text-primary rounded-full px-3 py-1 text-xs font-semibold">
            #{{ message.category }}
          </span>
        </div>

        <div class="text-foreground text-base leading-relaxed whitespace-pre-wrap">
          {{ message.message }}
        </div>
      </div>

      <!-- Replies Thread (if any) -->
      <div v-if="replies.length > 0" class="border-border/50 flex flex-col gap-4 border-t pt-4">
        <h4 class="text-muted-foreground text-xs font-semibold tracking-wide uppercase">Replies</h4>
        
        <div class="flex flex-col gap-3">
          <div v-for="reply in replies" :key="reply.uuid" 
            :class="[
              'flex flex-col max-w-[85%] rounded-2xl px-4 py-3 shadow-sm',
              reply.isSelf 
                ? 'bg-primary text-primary-foreground self-end rounded-br-sm' 
                : 'bg-muted text-foreground self-start rounded-bl-sm'
            ]"
          >
            <div class="mb-1 flex items-center gap-2">
              <span :class="['text-xs font-bold', reply.isSelf ? 'text-primary-foreground/90' : 'text-foreground']">{{ reply.author }}</span>
              <span :class="['text-[10px]', reply.isSelf ? 'text-primary-foreground/70' : 'text-muted-foreground']">{{ reply.time }}</span>
            </div>
            <p v-if="reply.message" class="whitespace-pre-wrap text-sm leading-relaxed mb-2">{{ reply.message }}</p>
            
            <!-- Attachments in bubble -->
            <div v-if="reply.attachments?.length > 0" class="flex flex-wrap gap-2 mt-1">
              <div v-for="(att, idx) in reply.attachments" :key="idx" class="flex flex-col gap-1">
                <img v-if="att.isImage" :src="att.url" class="max-w-[200px] max-h-[200px] rounded-lg object-cover border border-white/20 shadow-sm" />
                <div v-else class="flex items-center gap-2 rounded-lg bg-background/20 px-3 py-2 text-xs backdrop-blur-sm border border-white/10 shadow-sm">
                  <Icon name="lucide:file" class="h-4 w-4" />
                  <span class="truncate max-w-[150px] font-medium">{{ att.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Reply Input Area -->
      <div v-if="showReplyInput" class="border-border/50 mt-2 flex flex-col gap-3 border-t pt-4">
        
        <!-- Attachment Previews -->
        <div v-if="attachments.length > 0" class="flex flex-wrap gap-3">
          <div v-for="(att, idx) in attachments" :key="idx" class="relative flex items-center gap-2 rounded-lg border border-border bg-muted/50 p-2 pr-8 text-sm">
            <img v-if="att.isImage" :src="att.url" class="h-10 w-10 object-cover rounded-md border border-border" />
            <div v-else class="flex h-10 w-10 items-center justify-center rounded-md bg-background border border-border">
              <Icon name="lucide:file" class="h-5 w-5 text-muted-foreground" />
            </div>
            <span class="truncate max-w-[120px] text-xs font-medium">{{ att.name }}</span>
            <button @click="removeAttachment(idx)" class="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive focus:outline-none">
              <Icon name="lucide:x" class="h-4 w-4" />
            </button>
          </div>
        </div>

        <textarea
          v-model="replyText"
          rows="3"
          placeholder="Type your reply here... (Press Enter to send)"
          class="border-input bg-background focus:ring-primary w-full resize-none rounded-xl border px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:outline-none"
          @keydown.enter.exact.prevent="sendReply"
        ></textarea>
        
        <div class="flex items-center justify-between">
          <div>
            <input 
              type="file" 
              ref="fileInput" 
              class="hidden" 
              multiple 
              accept="image/*,.pdf,.doc,.docx"
              @change="handleFileSelect"
            />
            <AppButton variant="ghost" size="sm" class="text-muted-foreground hover:text-foreground flex gap-2 px-2" @click="fileInput?.click()">
              <Icon name="lucide:paperclip" class="h-4 w-4" />
              <span class="text-xs font-semibold uppercase tracking-wide">Attach</span>
            </AppButton>
          </div>
          <div class="flex gap-2">
            <AppButton variant="outline" size="sm" @click="showReplyInput = false">Cancel</AppButton>
            <AppButton variant="primary" size="sm" :disabled="(!replyText.trim() && attachments.length === 0) || isSending" @click="sendReply">
              {{ isSending ? 'Sending...' : 'Send Reply' }}
            </AppButton>
          </div>
        </div>
      </div>

    </div>
    
    <template #footer v-if="!showReplyInput">
      <AppButton variant="outline" @click="close">Close</AppButton>
      <AppButton variant="primary" @click="showReplyInput = true">Reply</AppButton>
    </template>
  </AppModal>
</template>
