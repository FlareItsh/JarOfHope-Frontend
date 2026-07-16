<template>
  <div class="bg-background p-6 px-10">
    <div class="flex items-center gap-3 bg-gray-100 px-6 py-2 rounded-full focus-within:ring-2 focus-within:ring-blue-500/20 transition mx-auto w-full max-w-full">
      <button class="text-gray-500 hover:text-gray-700 transition shrink-0">
        <Icon name="lucide:paperclip" class="w-6 h-6" />
      </button>
      
      <textarea 
        rows="1"
        placeholder="Your message" 
        class="w-full bg-transparent border-none focus:ring-0 resize-none py-3 text-base text-gray-700 focus:outline-none placeholder:text-gray-400"
      ></textarea>
      
      <button class="text-gray-500 hover:text-gray-700 transition shrink-0 ml-2">
        <Icon name="lucide:send" class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
</script>
