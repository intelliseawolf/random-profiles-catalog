<script lang="ts" setup>
import type { Profile } from "~/types/profile";
const props = defineProps<{ profile: Profile }>();
</script>

<template>
  <NuxtLink
    :to="`/profile/${props.profile.id}`"
    class="block rounded-xl border bg-white p-4 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
  >
    <img
      :src="props.profile.avatarUrl"
      :alt="`Avatar of ${props.profile.name}`"
      class="w-full h-48 object-cover rounded-lg"
      loading="lazy"
    />
    <div class="mt-3">
      <h3 class="font-semibold">{{ props.profile.name }}</h3>
      <p class="text-sm text-gray-600">
        {{ props.profile.jobTitle }} @ {{ props.profile.company }}
      </p>
      <p class="text-xs text-gray-500 mt-1">
        {{ props.profile.city }}, {{ props.profile.country }}
      </p>
    </div>
  </NuxtLink>
</template>
