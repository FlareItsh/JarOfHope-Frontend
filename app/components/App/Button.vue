<template>
  <NuxtLink
    v-if="to || href"
    :to="to || href"
    :class="[
      'focus:ring-ring ring-offset-background inline-flex cursor-pointer items-center justify-center rounded-md font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
      sizeClasses[size],
      variantClasses[variant],
    ]"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :class="[
      'focus:ring-ring ring-offset-background inline-flex cursor-pointer items-center justify-center rounded-md font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
      sizeClasses[size],
      variantClasses[variant],
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'secondary', 'outline', 'destructive', 'ghost'].includes(
        value
      ),
  },
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'sm', 'lg', 'icon'].includes(value),
  },
  href: {
    type: String,
    default: null,
  },
  to: {
    type: [String, Object],
    default: null,
  },
})

const variantClasses = {
  primary: 'bg-primary text-primary-foreground hover:opacity-90',
  secondary: 'bg-secondary text-secondary-foreground hover:opacity-90',
  outline:
    'border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground',
  destructive: 'bg-destructive text-destructive-foreground hover:opacity-90',
  ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground',
}

const sizeClasses = {
  default: 'px-4 py-2',
  sm: 'px-3 py-1.5 text-sm',
  lg: 'px-8 py-3 text-lg',
  icon: 'h-10 w-10',
}
</script>
