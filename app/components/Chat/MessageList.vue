<template>
  <div class="flex-1 overflow-y-auto custom-scrollbar px-10 py-6 bg-background flex flex-col gap-6">

    <!-- Received Message -->
    <div class="flex items-end gap-4 max-w-4xl">
      <img src="https://i.pravatar.cc/150?u=1" alt="Avatar" class="w-12 h-12 rounded-full object-cover shrink-0">
      <div class="flex flex-col gap-1">
        <div class="bg-blue-50 px-6 py-4 rounded-3xl rounded-bl-sm text-foreground text-base leading-relaxed">
          Hello
        </div>
      </div>
    </div>

    <!-- Sent Message -->
    <div class="flex items-end justify-end gap-4 max-w-4xl self-end">
      <div class="flex flex-col gap-1 items-end">
        <div class="bg-blue-400 px-6 py-4 rounded-3xl rounded-br-sm text-white text-base leading-relaxed">
          Hello i'm john doe
        </div>
      </div>
      <img src="https://i.pravatar.cc/150?u=10" alt="Avatar" class="w-12 h-12 rounded-full object-cover shrink-0">
    </div>

  </div>
</template>

<script setup>
</script>
