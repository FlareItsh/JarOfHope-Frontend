<template>
  <div class="bg-background flex flex-col font-sans">
    <ChatNavbar />
    <main class="min-h-screen w-full flex-1 px-8 py-4">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
