<template>
  <footer class="bg-background border-border mt-auto border-t">
    <div
      id="footer"
      class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div
        class="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left"
      >
        <!-- Logo and About -->
        <div
          class="col-span-1 flex flex-col items-center md:col-span-2 md:items-start"
        >
          <img
            src="/icons/logo.png"
            alt="Jar of Hope"
            class="mb-4 h-12 w-auto"
          />
          <p class="text-muted-foreground max-w-sm text-sm">
            A safe space for student voices, shared stories, and mutual support.
            Drop your thoughts, lift your burdens, and let hope grow together.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3
            class="text-foreground mb-4 text-sm font-semibold tracking-wider uppercase"
          >
            Quick Links
          </h3>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="text-muted-foreground hover:text-primary text-base transition-colors"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-muted-foreground hover:text-primary text-base transition-colors"
                >About</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-muted-foreground hover:text-primary text-base transition-colors"
                >Credits</a
              >
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h3
            class="text-foreground mb-4 text-sm font-semibold tracking-wider uppercase"
          >
            Connect
          </h3>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="text-muted-foreground hover:text-primary text-base transition-colors"
                >Facebook</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-muted-foreground hover:text-primary text-base transition-colors"
                >Twitter</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-muted-foreground hover:text-primary text-base transition-colors"
                >Instagram</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="border-border mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row md:gap-0 md:text-left"
      >
        <p class="text-muted-foreground text-sm">
          &copy; {{ new Date().getFullYear() }} Jar of Hope. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
