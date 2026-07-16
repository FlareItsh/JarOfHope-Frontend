<template>
  <div class="h-screen flex flex-col bg-background font-sans overflow-hidden">
    <!-- Separate simple navbar for chat -->
    <ChatNavbar />
    
    <div class="flex-1 flex w-full overflow-hidden">
      <!-- Container -->
      <div class="w-full h-full flex overflow-hidden">
        <!-- Sidebar -->
        <div 
          :class="[
            'bg-background flex flex-col h-full shrink-0 border-r border-border/50',
            showMobileSidebar ? 'w-full flex' : 'hidden md:flex md:w-80'
          ]"
        >
          <ChatSidebar @select="showMobileSidebar = false" />
        </div>
        
        <!-- Main Chat Area -->
        <div 
          :class="[
            'flex-1 flex flex-col bg-background relative border-l border-border/50',
            showMobileSidebar ? 'hidden md:flex' : 'flex w-full'
          ]"
        >
          <ChatHeader @back="showMobileSidebar = true" />
          <ChatMessageList />
          <ChatInputArea />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showMobileSidebar = ref(false)
</script>
