<template>
  <div
    class="min-h-screen p-8 bg-background text-foreground transition-colors duration-300"
  >
    <div class="max-w-5xl mx-auto space-y-12">
      <!-- Header -->
      <header
        class="border-b border-border pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <div>
          <h1 class="text-4xl font-bold tracking-tight text-primary">
            Brand Guidelines
          </h1>
          <p class="text-muted-foreground mt-2">
            Temporary base to visualize the STI Davao theme.
          </p>
        </div>
        <div class="flex gap-4">
          <NuxtLink
            to="/"
            class="px-4 py-2 border border-border bg-card hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium transition-colors"
          >
            Back to Home
          </NuxtLink>
        </div>
      </header>

      <!-- Color Palette -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b border-border pb-2">
          Color Palette
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Primary -->
          <div
            class="rounded-xl border border-border overflow-hidden bg-card text-card-foreground shadow-sm"
          >
            <div class="h-32 bg-primary flex items-center justify-center p-4">
              <span class="text-primary-foreground font-medium">Primary</span>
            </div>
            <div class="p-4 space-y-1">
              <p class="font-medium">Primary Color</p>
              <p class="text-sm text-muted-foreground">
                Used for main brand elements and primary buttons.
              </p>
            </div>
          </div>

          <!-- Secondary -->
          <div
            class="rounded-xl border border-border overflow-hidden bg-card text-card-foreground shadow-sm"
          >
            <div class="h-32 bg-secondary flex items-center justify-center p-4">
              <span class="text-secondary-foreground font-medium"
                >Secondary</span
              >
            </div>
            <div class="p-4 space-y-1">
              <p class="font-medium">Secondary Color</p>
              <p class="text-sm text-muted-foreground">
                Used for secondary actions and highlights.
              </p>
            </div>
          </div>

          <!-- Accent -->
          <div
            class="rounded-xl border border-border overflow-hidden bg-card text-card-foreground shadow-sm"
          >
            <div class="h-32 bg-accent flex items-center justify-center p-4">
              <span class="text-accent-foreground font-medium">Accent</span>
            </div>
            <div class="p-4 space-y-1">
              <p class="font-medium">Accent Color</p>
              <p class="text-sm text-muted-foreground">
                Used for interactive elements and subtle highlights.
              </p>
            </div>
          </div>

          <!-- Destructive -->
          <div
            class="rounded-xl border border-border overflow-hidden bg-card text-card-foreground shadow-sm"
          >
            <div
              class="h-32 bg-destructive flex items-center justify-center p-4"
            >
              <span class="text-destructive-foreground font-medium"
                >Destructive</span
              >
            </div>
            <div class="p-4 space-y-1">
              <p class="font-medium">Destructive Color</p>
              <p class="text-sm text-muted-foreground">
                Used for errors, warnings, and dangerous actions.
              </p>
            </div>
          </div>

          <!-- Muted -->
          <div
            class="rounded-xl border border-border overflow-hidden bg-card text-card-foreground shadow-sm"
          >
            <div class="h-32 bg-muted flex items-center justify-center p-4">
              <span class="text-muted-foreground font-medium">Muted</span>
            </div>
            <div class="p-4 space-y-1">
              <p class="font-medium">Muted Color</p>
              <p class="text-sm text-muted-foreground">
                Used for disabled states and subtle backgrounds.
              </p>
            </div>
          </div>

          <!-- Background & Foreground -->
          <div
            class="rounded-xl border border-border overflow-hidden bg-card text-card-foreground shadow-sm"
          >
            <div class="flex h-32">
              <div
                class="flex-1 bg-background flex items-center justify-center border-r border-border"
              >
                <span class="text-foreground font-medium text-xs"
                  >Background</span
                >
              </div>
              <div
                class="flex-1 bg-foreground flex items-center justify-center"
              >
                <span class="text-background font-medium text-xs"
                  >Foreground</span
                >
              </div>
            </div>
            <div class="p-4 space-y-1">
              <p class="font-medium">Base Colors</p>
              <p class="text-sm text-muted-foreground">
                The main background and text colors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Typography & Components -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b border-border pb-2">
          Typography & Components
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Text Sample -->
          <div class="space-y-6">
            <div class="space-y-3">
              <h1 class="text-4xl font-bold font-primary text-foreground">
                Heading 1
              </h1>
              <h2 class="text-3xl font-semibold font-primary text-foreground">
                Heading 2
              </h2>
              <h3 class="text-2xl font-semibold font-primary text-foreground">
                Heading 3
              </h3>
              <p
                class="text-base text-foreground font-sans mt-4 leading-relaxed"
              >
                This is a regular paragraph text using the standard sans font.
                It demonstrates how normal content looks against the background.
                Our design focuses on clarity and readibility.
              </p>
              <p class="text-sm text-muted-foreground mt-2">
                This is smaller, muted text used for captions, help text, or
                secondary information.
              </p>
            </div>
          </div>

          <!-- UI Elements Sample -->
          <div
            class="space-y-6 bg-card border border-border p-6 rounded-xl shadow-sm"
          >
            <h3 class="text-lg font-medium text-foreground mb-4">
              Interactive Elements
            </h3>

            <div class="flex flex-wrap gap-4">
              <AppButton variant="primary">
                Primary Button
              </AppButton>
              <AppButton variant="secondary">
                Secondary
              </AppButton>
              <AppButton variant="outline">
                Outline
              </AppButton>
              <AppButton variant="destructive">
                Danger
              </AppButton>
            </div>

            <div class="space-y-2 mt-8">
              <label class="text-sm font-medium text-foreground"
                >Input Field</label
              >
              <input
                type="text"
                placeholder="Type something..."
                class="w-full px-3 py-2 bg-background text-foreground border border-input rounded-md ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition"
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
  title: "Brand Guidelines - Jar of Hope",
});
</script>
