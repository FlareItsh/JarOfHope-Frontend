<template>
  <div
    class="custom-scrollbar bg-background flex flex-1 flex-col gap-6 overflow-y-auto px-4 py-2"
  >
    <!-- Received Message -->
    <div class="flex max-w-4xl items-end gap-4">
      <img
        src="https://i.pravatar.cc/150?u=1"
        alt="Avatar"
        class="h-12 w-12 shrink-0 rounded-full object-cover"
      />
      <div class="flex flex-col gap-1">
        <div
          class="text-foreground rounded-3xl rounded-bl-sm bg-blue-50 px-6 py-4 text-base leading-relaxed"
        >
          Hello
        </div>
      </div>
    </div>

    <!-- Sent Message -->
    <div class="flex max-w-4xl items-end justify-end gap-4 self-end">
      <div class="flex flex-col items-end gap-1">
        <div
          class="rounded-3xl rounded-br-sm bg-blue-400 px-6 py-4 text-base leading-relaxed text-white"
        >
          Inamo pakyu kalbo
        </div>
      </div>
      <img
        src="https://i.pravatar.cc/150?u=10"
        alt="Avatar"
        class="h-12 w-12 shrink-0 rounded-full object-cover"
      />
    </div>
  </div>
</template>

<script setup></script>
