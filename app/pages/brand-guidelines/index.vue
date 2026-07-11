<template>
  <div
    class="bg-background text-foreground min-h-screen p-8 transition-colors duration-300"
  >
    <div class="mx-auto max-w-5xl space-y-12">
      <!-- Header -->
      <header
        class="border-border flex flex-col items-start justify-between gap-4 border-b pb-6 sm:flex-row sm:items-center"
      >
        <div>
          <h1 class="text-primary text-4xl font-bold tracking-tight">
            Brand Guidelines
          </h1>
          <p class="text-muted-foreground mt-2">
            Temporary base to visualize the STI Davao theme.
          </p>
        </div>
        <div class="flex gap-4">
          <NuxtLink
            to="/"
            class="border-border bg-card hover:bg-accent hover:text-accent-foreground rounded-md border px-4 py-2 text-sm font-medium transition-colors"
          >
            Back to Home
          </NuxtLink>
        </div>
      </header>

      <!-- Color Palette -->
      <section class="space-y-6">
        <h2 class="border-border border-b pb-2 text-2xl font-semibold">
          Color Palette
        </h2>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <!-- Primary -->
          <div
            class="border-border bg-card text-card-foreground overflow-hidden rounded-xl border shadow-sm"
          >
            <div class="bg-primary flex h-32 items-center justify-center p-4">
              <span class="text-primary-foreground font-medium">Primary</span>
            </div>
            <div class="space-y-1 p-4">
              <p class="font-medium">Primary Color</p>
              <p class="text-muted-foreground text-sm">
                Used for main brand elements and primary buttons.
              </p>
            </div>
          </div>

          <!-- Secondary -->
          <div
            class="border-border bg-card text-card-foreground overflow-hidden rounded-xl border shadow-sm"
          >
            <div class="bg-secondary flex h-32 items-center justify-center p-4">
              <span class="text-secondary-foreground font-medium"
                >Secondary</span
              >
            </div>
            <div class="space-y-1 p-4">
              <p class="font-medium">Secondary Color</p>
              <p class="text-muted-foreground text-sm">
                Used for secondary actions and highlights.
              </p>
            </div>
          </div>

          <!-- Accent -->
          <div
            class="border-border bg-card text-card-foreground overflow-hidden rounded-xl border shadow-sm"
          >
            <div class="bg-accent flex h-32 items-center justify-center p-4">
              <span class="text-accent-foreground font-medium">Accent</span>
            </div>
            <div class="space-y-1 p-4">
              <p class="font-medium">Accent Color</p>
              <p class="text-muted-foreground text-sm">
                Used for interactive elements and subtle highlights.
              </p>
            </div>
          </div>

          <!-- Destructive -->
          <div
            class="border-border bg-card text-card-foreground overflow-hidden rounded-xl border shadow-sm"
          >
            <div
              class="bg-destructive flex h-32 items-center justify-center p-4"
            >
              <span class="text-destructive-foreground font-medium"
                >Destructive</span
              >
            </div>
            <div class="space-y-1 p-4">
              <p class="font-medium">Destructive Color</p>
              <p class="text-muted-foreground text-sm">
                Used for errors, warnings, and dangerous actions.
              </p>
            </div>
          </div>

          <!-- Muted -->
          <div
            class="border-border bg-card text-card-foreground overflow-hidden rounded-xl border shadow-sm"
          >
            <div class="bg-muted flex h-32 items-center justify-center p-4">
              <span class="text-muted-foreground font-medium">Muted</span>
            </div>
            <div class="space-y-1 p-4">
              <p class="font-medium">Muted Color</p>
              <p class="text-muted-foreground text-sm">
                Used for disabled states and subtle backgrounds.
              </p>
            </div>
          </div>

          <!-- Background & Foreground -->
          <div
            class="border-border bg-card text-card-foreground overflow-hidden rounded-xl border shadow-sm"
          >
            <div class="flex h-32">
              <div
                class="bg-background border-border flex flex-1 items-center justify-center border-r"
              >
                <span class="text-foreground text-xs font-medium"
                  >Background</span
                >
              </div>
              <div
                class="bg-foreground flex flex-1 items-center justify-center"
              >
                <span class="text-background text-xs font-medium"
                  >Foreground</span
                >
              </div>
            </div>
            <div class="space-y-1 p-4">
              <p class="font-medium">Base Colors</p>
              <p class="text-muted-foreground text-sm">
                The main background and text colors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Typography & Components -->
      <section class="space-y-6">
        <h2 class="border-border border-b pb-2 text-2xl font-semibold">
          Typography & Components
        </h2>

        <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
          <!-- Text Sample -->
          <div class="space-y-6">
            <div class="space-y-3">
              <h1 class="font-primary text-foreground text-4xl font-bold">
                Heading 1
              </h1>
              <h2 class="font-primary text-foreground text-3xl font-semibold">
                Heading 2
              </h2>
              <h3 class="font-primary text-foreground text-2xl font-semibold">
                Heading 3
              </h3>
              <p
                class="text-foreground mt-4 font-sans text-base leading-relaxed"
              >
                This is a regular paragraph text using the standard sans font.
                It demonstrates how normal content looks against the background.
                Our design focuses on clarity and readibility.
              </p>
              <p class="text-muted-foreground mt-2 text-sm">
                This is smaller, muted text used for captions, help text, or
                secondary information.
              </p>
            </div>
          </div>

          <!-- UI Elements Sample -->
          <div
            class="bg-card border-border space-y-6 rounded-xl border p-6 shadow-sm"
          >
            <h3 class="text-foreground mb-4 text-lg font-medium">
              Interactive Elements
            </h3>

            <div class="flex flex-wrap gap-4">
              <AppButton variant="primary"> Primary Button </AppButton>
              <AppButton variant="secondary"> Secondary </AppButton>
              <AppButton variant="outline"> Outline </AppButton>
              <AppButton variant="destructive"> Danger </AppButton>
            </div>

            <div class="mt-8 space-y-2">
              <label class="text-foreground text-sm font-medium"
                >Input Field</label
              >
              <input
                type="text"
                placeholder="Type something..."
                class="bg-background text-foreground border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring w-full rounded-md border px-3 py-2 transition focus:ring-2 focus:ring-offset-2 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Brand Guidelines - Jar of Hope',
})
</script>
