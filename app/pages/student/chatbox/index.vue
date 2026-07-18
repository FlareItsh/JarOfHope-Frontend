<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'chat-layout',
})

const sampleMessages = ref([
  {
    id: 1,
    initials: 'JD',
    author: 'John Doe',
    time: '2 mins ago',
    unreadCount: 2,
    message: 'I wanted to share some feedback regarding the upcoming school events. Could we possibly consider adding more options for freshmen?',
    category: 'Events',
  },
  {
    id: 2,
    initials: 'JD',
    author: 'John Doe',
    time: '1 hour ago',
    unreadCount: 0,
    message: "The cafeteria food has been a bit repetitive lately. I wonder if it's possible to introduce a new menu for next month?",
    category: 'Facilities',
  },
  {
    id: 3,
    initials: 'JD',
    author: 'John Doe',
    time: 'Yesterday',
    unreadCount: 1,
    message: "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  }
])

const selectedMessage = ref(null)
const isModalOpen = ref(false)
const isNewMessageModalOpen = ref(false)

const openModal = (msg) => {
  selectedMessage.value = msg
  isModalOpen.value = true
}
</script>

<template>
  <div class="mb-4 flex items-center justify-between px-2">
    <h2 class="font-primary text-foreground text-xl font-bold">
      My Sent Messages
    </h2>
    <AppButton variant="primary" size="sm" class="flex items-center gap-2" @click="isNewMessageModalOpen = true">
      <Icon name="lucide:plus" class="h-4 w-4" />
      New Message
    </AppButton>
  </div>
  <div
    class="mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <ChatCard
      v-for="msg in sampleMessages"
      :key="msg.id"
      :initials="msg.initials"
      :author="msg.author"
      :time="msg.time"
      :unread-count="msg.unreadCount"
      :message="msg.message"
      :category="msg.category"
      @click="openModal(msg)"
    />
  </div>

  <ChatMessageModal v-model="isModalOpen" :message="selectedMessage" />
  <ChatNewMessageModal v-model="isNewMessageModalOpen" />
</template>
