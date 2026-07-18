<script setup lang="ts">
let leaders = [
  [
    1,
    'Rachelle Ann T. Pamad',
    '/leaders/Rachelle.png',
    'BS in Hospitatlity Management',
    'HTM Representative',
  ],
  [
    2,
    'Rayver P. Dasalla',
    '/leaders/Flare.png',
    'BS in Computer Science',
    'Senate President',
  ],
  [
    3,
    'Sean Tristan Dave M. Ragas',
    '/leaders/Sean.png',
    'BS in Information Technology',
    'ICT Representative',
  ],
  [
    4,
    'Kiko Abayan',
    '/leaders/Kiko.png',
    'Mobile App and Web Development',
    'SHS Representative',
  ],
]
</script>

<template>
  <section class="bg-background py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
        <h2 class="text-foreground font-primary text-3xl font-bold">
          Meet Our Student Leaders
        </h2>
        <p class="text-muted-foreground mx-auto mt-4 max-w-2xl">
          The student leaders and visionaries who brought Jar of Hope to life.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="[id, name, image, track, position] in leaders"
          :key="id"
          class="space-y-4 text-center"
        >
          <div
            class="border-card group relative mx-auto h-40 w-40 cursor-pointer overflow-hidden rounded-full border-4 shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              :src="image"
              :alt="name"
              class="h-full w-full object-cover transition-all duration-300 group-hover:grayscale-0"
            />
          </div>
          <div>
            <h3 class="text-foreground text-xl font-bold">{{ name }}</h3>
            <p class="text-primary mt-1 text-sm font-medium">{{ position }}</p>
            <p class="text-muted-foreground mt-1 text-xs">
              {{ track }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
