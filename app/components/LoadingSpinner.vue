<template>
  <div
    role="status"
    aria-live="polite"
    class="flex items-center justify-center p-6"
  >
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-opacity="0.25"
        stroke-width="4"
        fill="none"
      />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
      />
    </svg>
    <span class="sr-only">Loading…</span>
  </div>
</template>
