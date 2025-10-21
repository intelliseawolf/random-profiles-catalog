<script setup lang="ts">
const props = defineProps<{ message?: string }>();
</script>

<template>
  <div
    class="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800"
    role="alert"
  >
    <p class="font-medium">Something went wrong</p>
    <p class="mt-1 text-sm">{{ props.message || "Please try again." }}</p>
  </div>
</template>
