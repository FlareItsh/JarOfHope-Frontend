<template>
  <div
    class="bg-background border-border/50 flex h-full w-full shrink-0 flex-col md:w-80 md:border-r"
  >
    <!-- Search -->
    <div class="shrink-0 px-4 py-2">
      <div class="relative">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4"
        >
          <Icon
            name="lucide:search"
            class="h-5 w-5 text-blue-500"
          />
        </div>
        <input
          type="text"
          placeholder="Search Chats"
          class="border-border/40 text-foreground placeholder:text-muted-foreground w-full rounded-xl border bg-white py-3 pr-4 pl-12 text-sm font-medium shadow-sm transition focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
        />
      </div>
    </div>

    <!-- Contact List -->
    <div class="custom-scrollbar flex-1 overflow-y-auto">
      <!-- Active User -->
      <div
        @click="$emit('select')"
        class="bg-muted/50 mx-3 mb-1 flex cursor-pointer items-center gap-4 rounded-2xl p-4 transition"
      >
        <img
          src="https://i.pravatar.cc/150?u=1"
          alt="Avatar"
          class="h-14 w-14 shrink-0 rounded-2xl object-cover shadow-sm"
        />
        <div class="min-w-0 flex-1">
          <h3 class="text-foreground mb-0.5 text-base font-bold">Wally</h3>
          <p class="text-muted-foreground truncate text-sm">
            You: Hello i'm john doe
          </p>
        </div>
      </div>

      <!-- Other Users -->
      <div
        @click="$emit('select')"
        class="hover:bg-muted/30 mx-3 mb-1 flex cursor-pointer items-center gap-4 rounded-2xl p-4 transition"
      >
        <img
          src="https://i.pravatar.cc/150?u=2"
          alt="Avatar"
          class="h-14 w-14 shrink-0 rounded-2xl object-cover shadow-sm"
        />
        <div class="min-w-0 flex-1">
          <h3 class="text-foreground mb-0.5 text-base font-bold">Julianne</h3>
          <p class="text-muted-foreground/70 truncate text-sm">
            I Have rare condition
          </p>
        </div>
      </div>

      <div
        @click="$emit('select')"
        class="hover:bg-muted/30 mx-3 mb-1 flex cursor-pointer items-center gap-4 rounded-2xl p-4 transition"
      >
        <img
          src="https://i.pravatar.cc/150?u=3"
          alt="Avatar"
          class="h-14 w-14 shrink-0 rounded-2xl object-cover shadow-sm"
        />
        <div class="min-w-0 flex-1">
          <h3 class="text-foreground mb-0.5 text-base font-bold">
            Elena Vance
          </h3>
          <p class="text-muted-foreground/70 truncate text-sm">
            I Have rare condition
          </p>
        </div>
      </div>

      <div
        @click="$emit('select')"
        class="hover:bg-muted/30 mx-3 mb-1 flex cursor-pointer items-center gap-4 rounded-2xl p-4 transition"
      >
        <img
          src="https://i.pravatar.cc/150?u=4"
          alt="Avatar"
          class="h-14 w-14 shrink-0 rounded-2xl object-cover shadow-sm"
        />
        <div class="min-w-0 flex-1">
          <h3 class="text-foreground mb-0.5 text-base font-bold">
            David Miller
          </h3>
          <p class="text-muted-foreground/70 truncate text-sm">
            I Have rare condition
          </p>
        </div>
      </div>

      <div
        @click="$emit('select')"
        class="hover:bg-muted/30 mx-3 mb-1 flex cursor-pointer items-center gap-4 rounded-2xl p-4 transition"
      >
        <img
          src="https://i.pravatar.cc/150?u=5"
          alt="Avatar"
          class="h-14 w-14 shrink-0 rounded-2xl object-cover shadow-sm"
        />
        <div class="min-w-0 flex-1">
          <h3 class="text-foreground mb-0.5 text-base font-bold">
            Robert Chen
          </h3>
          <p class="text-muted-foreground/70 truncate text-sm">
            I Have rare condition
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['select'])
</script>
