<template>
  <div
    class="bg-background border-border flex shrink-0 items-center justify-between border-b px-6 py-3 md:px-8"
  >
    <div class="flex items-center gap-2">
      <!-- Mobile Back Button -->
      <button
        @click="$emit('back')"
        class="text-muted-foreground hover:bg-muted hover:text-foreground -ml-2 rounded-full p-2 transition md:hidden"
      >
        <Icon
          name="lucide:arrow-left"
          class="h-6 w-6"
        />
      </button>

      <img
        src="https://i.pravatar.cc/150?u=1"
        alt="Avatar"
        class="h-14 w-14 shrink-0 rounded-full object-cover shadow-sm"
      />

      <h2 class="text-foreground text-2xl font-bold md:text-3xl">Wally</h2>
    </div>

    <div class="flex items-center">
      <button
        class="text-muted-foreground hover:bg-muted hover:text-foreground rounded-full p-2 transition"
      >
        <Icon
          name="lucide:more-vertical"
          class="h-6 w-6"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['back'])
</script>
