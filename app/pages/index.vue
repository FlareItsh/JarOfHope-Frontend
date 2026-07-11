<template>
  <header>
    <AppNavbar />
  </header>

  <main class="flex min-h-screen flex-1 flex-col">
    <!-- Hero Section -->
    <section
      class="bg-background relative flex flex-1 flex-col justify-center overflow-hidden pt-24 pb-32"
    >
      <div
        class="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
      >
        <div
          class="bg-accent text-accent-foreground mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide uppercase"
        >
          A Safe Space for Every Voice
        </div>
        <h1
          class="font-primary text-foreground mb-8 text-5xl font-bold tracking-tight md:text-7xl"
        >
          Speak Your Truth.<br />
          <span class="text-primary">Lighten the Load.</span>
        </h1>
        <p
          class="text-muted-foreground mx-auto mt-4 mb-10 max-w-2xl text-xl leading-relaxed"
        >
          Jar of Hope is an anonymous freedom board for STI College of Davao students. Share your
          struggles, drop your burdens, and express yourself freely.
        </p>
        <div
          class="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <AppButton
            variant="primary"
            size="lg"
            class="w-full shadow-lg transition-all hover:shadow-xl sm:w-auto"
          >
            Drop a Message
          </AppButton>
        </div>
      </div>

      <!-- Background Decorative Elements -->
      <div
        class="pointer-events-none absolute top-0 left-1/2 -z-10 h-full w-full max-w-7xl -translate-x-1/2 overflow-hidden opacity-30"
      >
        <div
          class="bg-primary animate-blob absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-20 mix-blend-multiply blur-3xl filter"
        ></div>
        <div
          class="bg-secondary animate-blob absolute top-32 -right-24 h-96 w-96 rounded-full opacity-20 mix-blend-multiply blur-3xl filter"
          style="animation-delay: 2s"
        ></div>
        <div
          class="bg-accent animate-blob absolute -bottom-24 left-32 h-96 w-96 rounded-full opacity-20 mix-blend-multiply blur-3xl filter"
          style="animation-delay: 4s"
        ></div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-card border-border border-y py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-16 text-center">
          <h2 class="text-foreground font-primary text-3xl font-bold">
            How Jar of Hope Works
          </h2>
          <p class="text-muted-foreground mx-auto mt-4 max-w-2xl">
            A simple, anonymous way to connect with your peers and lighten the
            load.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
          <!-- Feature 1 -->
          <div class="space-y-4 text-center">
            <div
              class="bg-primary/10 text-primary mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
            >
              <svg
                class="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-foreground text-xl font-bold">100% Anonymous</h3>
            <p class="text-muted-foreground leading-relaxed">
              No names, no accounts required. Your identity is completely
              protected so you can share without fear.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="space-y-4 text-center">
            <div
              class="bg-secondary/10 text-secondary mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
            >
              <svg
                class="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-foreground text-xl font-bold">Safe & Supportive</h3>
            <p class="text-muted-foreground leading-relaxed">
              A moderated environment dedicated to uplifting student mental
              health and fostering mutual support.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="space-y-4 text-center">
            <div
              class="bg-accent text-accent-foreground mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
            >
              <svg
                class="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </div>
            <h3 class="text-foreground text-xl font-bold">Community Driven</h3>
            <p class="text-muted-foreground leading-relaxed">
              Read stories from peers facing similar challenges. Leave reactions
              to show your support.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet the Senators Section -->
    <AppLeaders />

    <!-- CTA Section -->
    <section class="bg-card border-border border-t py-24">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          class="text-foreground font-primary mb-6 text-3xl font-bold md:text-5xl"
        >
          Ready to lighten the load?
        </h2>
        <p class="text-muted-foreground mb-10 text-xl">
          Join hundreds of students already finding peace and support through
          anonymous sharing.
        </p>
        <AppButton
          variant="primary"
          size="lg"
          class="shadow-lg transition-all hover:shadow-xl"
        >
          Write Your First Message
        </AppButton>
      </div>
    </section>
  </main>

  <footer>
    <AppFooter />
  </footer>
</template>
