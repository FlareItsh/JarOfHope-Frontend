<template>
  <footer class="bg-background border-t border-border mt-auto">
    <div id="footer" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <!-- Logo and About -->
        <div class="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
          <img src="/icons/logo.png" alt="Jar of Hope" class="h-12 w-auto mb-4" />
          <p class="text-muted-foreground text-sm max-w-sm">
            A safe space for student voices, shared stories, and mutual support. Drop your thoughts, lift your burdens, and let hope grow together.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-base text-muted-foreground hover:text-primary transition-colors">Home</a></li>
            <li><a href="#" class="text-base text-muted-foreground hover:text-primary transition-colors">About</a></li>
            <li><a href="#" class="text-base text-muted-foreground hover:text-primary transition-colors">Credits</a></li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h3 class="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Connect</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-base text-muted-foreground hover:text-primary transition-colors">Facebook</a></li>
            <li><a href="#" class="text-base text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
            <li><a href="#" class="text-base text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0">
        <p class="text-sm text-muted-foreground">
          &copy; {{ new Date().getFullYear() }} Jar of Hope. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>