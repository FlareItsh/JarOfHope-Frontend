<script setup>
import { ref, computed } from 'vue'

definePageMeta({
  layout: 'chat-layout',
})

const sampleMessages = ref([
  {
    id: 1,
    initials: 'AN',
    author: 'Anonymous',
    time: '2 mins ago',
    date: '2026-07-19',
    unreadCount: 2,
    message:
      'I wanted to share some feedback regarding the upcoming school events. Could we possibly consider adding more options for...',
    category: 'Events',
  },
  {
    id: 2,
    initials: 'BF',
    author: 'BraveFalcon99',
    time: '1 hour ago',
    date: '2026-07-19',
    unreadCount: 0,
    message:
      "The cafeteria food has been a bit repetitive lately. I wonder if it's possible to introduce a new menu for next month?",
    category: 'Facilities',
  },
  {
    id: 3,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
  {
    id: 4,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
  {
    id: 1,
    initials: 'AN',
    author: 'Anonymous',
    time: '2 mins ago',
    date: '2026-07-19',
    unreadCount: 2,
    message:
      'I wanted to share some feedback regarding the upcoming school events. Could we possibly consider adding more options for...',
    category: 'Events',
  },
  {
    id: 2,
    initials: 'BF',
    author: 'BraveFalcon99',
    time: '1 hour ago',
    date: '2026-07-19',
    unreadCount: 0,
    message:
      "The cafeteria food has been a bit repetitive lately. I wonder if it's possible to introduce a new menu for next month?",
    category: 'Facilities',
  },
  {
    id: 3,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
  {
    id: 4,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
  {
    id: 1,
    initials: 'AN',
    author: 'Anonymous',
    time: '2 mins ago',
    date: '2026-07-19',
    unreadCount: 2,
    message:
      'I wanted to share some feedback regarding the upcoming school events. Could we possibly consider adding more options for...',
    category: 'Events',
  },
  {
    id: 2,
    initials: 'BF',
    author: 'BraveFalcon99',
    time: '1 hour ago',
    date: '2026-07-19',
    unreadCount: 0,
    message:
      "The cafeteria food has been a bit repetitive lately. I wonder if it's possible to introduce a new menu for next month?",
    category: 'Facilities',
  },
  {
    id: 3,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
  {
    id: 4,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
  {
    id: 1,
    initials: 'AN',
    author: 'Anonymous',
    time: '2 mins ago',
    date: '2026-07-19',
    unreadCount: 2,
    message:
      'I wanted to share some feedback regarding the upcoming school events. Could we possibly consider adding more options for...',
    category: 'Events',
  },
  {
    id: 2,
    initials: 'BF',
    author: 'BraveFalcon99',
    time: '1 hour ago',
    date: '2026-07-19',
    unreadCount: 0,
    message:
      "The cafeteria food has been a bit repetitive lately. I wonder if it's possible to introduce a new menu for next month?",
    category: 'Facilities',
  },
  {
    id: 3,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
  {
    id: 4,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
  {
    id: 1,
    initials: 'AN',
    author: 'Anonymous',
    time: '2 mins ago',
    date: '2026-07-19',
    unreadCount: 2,
    message:
      'I wanted to share some feedback regarding the upcoming school events. Could we possibly consider adding more options for...',
    category: 'Events',
  },
  {
    id: 2,
    initials: 'BF',
    author: 'BraveFalcon99',
    time: '1 hour ago',
    date: '2026-07-19',
    unreadCount: 0,
    message:
      "The cafeteria food has been a bit repetitive lately. I wonder if it's possible to introduce a new menu for next month?",
    category: 'Facilities',
  },
  {
    id: 3,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
  {
    id: 4,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
  {
    id: 1,
    initials: 'AN',
    author: 'Anonymous',
    time: '2 mins ago',
    date: '2026-07-19',
    unreadCount: 2,
    message:
      'I wanted to share some feedback regarding the upcoming school events. Could we possibly consider adding more options for...',
    category: 'Events',
  },
  {
    id: 2,
    initials: 'BF',
    author: 'BraveFalcon99',
    time: '1 hour ago',
    date: '2026-07-19',
    unreadCount: 0,
    message:
      "The cafeteria food has been a bit repetitive lately. I wonder if it's possible to introduce a new menu for next month?",
    category: 'Facilities',
  },
  {
    id: 3,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
  {
    id: 4,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
  {
    id: 1,
    initials: 'AN',
    author: 'Anonymous',
    time: '2 mins ago',
    date: '2026-07-19',
    unreadCount: 2,
    message:
      'I wanted to share some feedback regarding the upcoming school events. Could we possibly consider adding more options for...',
    category: 'Events',
  },
  {
    id: 2,
    initials: 'BF',
    author: 'BraveFalcon99',
    time: '1 hour ago',
    date: '2026-07-19',
    unreadCount: 0,
    message:
      "The cafeteria food has been a bit repetitive lately. I wonder if it's possible to introduce a new menu for next month?",
    category: 'Facilities',
  },
  {
    id: 3,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
  {
    id: 4,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
  {
    id: 1,
    initials: 'AN',
    author: 'Anonymous',
    time: '2 mins ago',
    date: '2026-07-19',
    unreadCount: 2,
    message:
      'I wanted to share some feedback regarding the upcoming school events. Could we possibly consider adding more options for...',
    category: 'Events',
  },
  {
    id: 2,
    initials: 'BF',
    author: 'BraveFalcon99',
    time: '1 hour ago',
    date: '2026-07-19',
    unreadCount: 0,
    message:
      "The cafeteria food has been a bit repetitive lately. I wonder if it's possible to introduce a new menu for next month?",
    category: 'Facilities',
  },
  {
    id: 3,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
  {
    id: 4,
    initials: 'SS',
    author: 'SilentSeeker',
    time: 'Yesterday',
    date: '2026-07-18',
    unreadCount: 1,
    message:
      "I'm having trouble accessing the student portal from my phone. Is anyone else experiencing this issue or is it just me?",
    category: 'IT Support',
  },
])

const selectedMessage = ref(null)
const isModalOpen = ref(false)

const searchQuery = ref('')
const selectedCategory = ref('')
const startDate = ref('')
const endDate = ref('')

const filteredMessages = computed(() => {
  return sampleMessages.value.filter((msg) => {
    const searchLower = searchQuery.value.toLowerCase()
    const matchesSearch =
      msg.author.toLowerCase().includes(searchLower) ||
      msg.message.toLowerCase().includes(searchLower)

    const matchesCategory =
      selectedCategory.value === '' || msg.category === selectedCategory.value

    // Date Range Filter
    let matchesDate = true
    if (startDate.value || endDate.value) {
      // Mock data date format is YYYY-MM-DD which allows direct string comparison,
      // but Date object comparison is safer for future-proofing.
      const msgDate = new Date(msg.date)
      const sDate = startDate.value ? new Date(startDate.value) : null
      const eDate = endDate.value ? new Date(endDate.value) : null
      
      // Ensure time components don't interfere with <= comparison for end date
      if (eDate) eDate.setHours(23, 59, 59, 999)

      if (sDate && eDate) {
        matchesDate = msgDate >= sDate && msgDate <= eDate
      } else if (sDate) {
        matchesDate = msgDate >= sDate
      } else if (eDate) {
        matchesDate = msgDate <= eDate
      }
    }

    return matchesSearch && matchesCategory && matchesDate
  })
})

const openModal = (msg) => {
  selectedMessage.value = msg
  isModalOpen.value = true
}
</script>

<template>
  <div
    class="mb-6 flex flex-col gap-4 px-2 sm:flex-row sm:items-center sm:justify-between"
  >
    <h2
      class="font-primary text-foreground text-xl font-bold whitespace-nowrap"
    >
      Recent Messages
    </h2>

    <div class="flex flex-1 flex-wrap items-center gap-3 sm:justify-end">
      <!-- Search Bar -->
      <div class="relative w-full sm:max-w-xs">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <Icon
            name="lucide:search"
            class="text-muted-foreground h-4 w-4"
          />
        </div>
        <input
          v-model="searchQuery"
          type="text"
          class="border-input bg-background focus:ring-primary block w-full rounded-full border py-2 pr-3 pl-10 text-sm shadow-sm focus:border-transparent focus:ring-2 focus:outline-none"
          placeholder="Search messages..."
        />
      </div>

      <!-- Category Filter -->
      <select
        v-model="selectedCategory"
        class="border-input bg-background focus:ring-primary rounded-full border px-4 py-2 text-sm shadow-sm focus:border-transparent focus:ring-2 focus:outline-none"
      >
        <option value="">All Categories</option>
        <option value="Events">Events</option>
        <option value="Facilities">Facilities</option>
        <option value="IT Support">IT Support</option>
      </select>

      <!-- Date Filter -->
      <div class="flex items-center gap-2">
        <input 
          v-model="startDate"
          type="date"
          class="border-input bg-background focus:ring-primary rounded-full border px-3 py-2 text-sm shadow-sm focus:border-transparent focus:ring-2 focus:outline-none"
        />
        <span class="text-muted-foreground text-xs font-medium">to</span>
        <input 
          v-model="endDate"
          type="date"
          class="border-input bg-background focus:ring-primary rounded-full border px-3 py-2 text-sm shadow-sm focus:border-transparent focus:ring-2 focus:outline-none"
        />
      </div>
    </div>
  </div>

  <div
    class="mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <ChatCard
      v-for="msg in filteredMessages"
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

  <ChatMessageModal
    v-model="isModalOpen"
    :message="selectedMessage"
  />
</template>
