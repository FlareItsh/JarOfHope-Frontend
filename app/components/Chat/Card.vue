<template>
  <div
    class="bg-card text-card-foreground border-border border-l-primary hover:border-primary/50 hover:bg-primary/[0.02] group relative flex h-full w-full cursor-pointer flex-col gap-3 rounded-2xl border border-l-4 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
  >
    <!-- Card Header / Profile -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <!-- Avatar / Initials -->
        <div
          class="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold uppercase"
        >
          {{ initials }}
        </div>
        <!-- Name and Time -->
        <div>
          <h3 class="font-primary text-sm font-semibold">@{{ author }}</h3>
          <p class="text-muted-foreground text-xs">{{ time }}</p>
        </div>
      </div>

      <!-- Unread Badge using the yellow accent color -->
      <span
        v-if="unreadCount > 0"
        class="bg-accent text-accent-foreground flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold shadow-sm"
      >
        {{ unreadCount }}
      </span>
    </div>

    <!-- Message Preview -->
    <div class="mt-2">
      <p class="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
        {{ message }}
      </p>
    </div>

    <!-- Action / Status Footer -->
    <div
      class="border-border/50 mt-2 flex items-center justify-between border-t pt-3"
    >
      <div class="flex gap-2">
        <!-- Tag using primary color -->
        <span
          class="bg-primary/5 text-primary rounded-full px-2.5 py-0.5 text-xs font-medium"
        >
          #{{ category }}
        </span>
      </div>
      <button
        class="text-primary group-hover:text-primary/80 flex items-center gap-1 text-sm font-semibold transition-colors"
      >
        Read More
        <svg
          class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  initials: { type: String, default: 'AN' },
  author: { type: String, default: 'Anonymous' },
  time: { type: String, default: 'Just now' },
  unreadCount: { type: Number, default: 0 },
  message: { type: String, required: true },
  category: { type: String, default: 'General' },
})
</script>
