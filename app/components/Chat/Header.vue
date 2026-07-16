<template>
  <div class="h-24 bg-background flex items-center justify-between px-6 md:px-8 shrink-0">
    <div class="flex items-center gap-2">
      <!-- Mobile Back Button -->
      <button 
        @click="$emit('back')"
        class="md:hidden p-2 -ml-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full transition"
      >
        <Icon name="lucide:arrow-left" class="w-6 h-6" />
      </button>
      
      <h2 class="font-bold text-foreground text-2xl md:text-3xl">Wally</h2>
    </div>
    
    <div class="flex items-center">
      <button class="p-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full transition">
        <Icon name="lucide:more-vertical" class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['back'])
</script>
