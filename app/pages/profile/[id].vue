<script setup lang="ts">
import { useApiClient } from "~/composables/useApiClient";
import ErrorState from "~/components/ErrorState.vue";
import LoadingSpinner from "~/components/LoadingSpinner.vue";
import type { Profile } from "~/types/profile";

const route = useRoute();
const id = route.params.id as string;
useSeo(`Profile · ${id}`, "Detailed profile from the local API.");

const { getProfile } = useApiClient();
const { data, error, status } = await useAsyncData<Profile>(
  () => `profile-${id}`,
  () => getProfile(id),
  { server: true, lazy: true }
);
</script>

<template>
  <section
    v-if="status === 'success' && data"
    class="grid md:grid-cols-3 gap-6"
  >
    <div class="md:col-span-1">
      <img
        :src="data.avatarUrl"
        :alt="`Avatar of ${data.name}`"
        class="w-full h-auto rounded-xl shadow"
      />
      <div class="mt-4 space-y-1 text-sm text-gray-600">
        <p><strong class="text-gray-800">Email:</strong> {{ data.email }}</p>
        <p>
          <strong class="text-gray-800">Username:</strong> {{ data.username }}
        </p>
        <p><strong class="text-gray-800">Phone:</strong> {{ data.phone }}</p>
        <p>
          <strong class="text-gray-800">Location:</strong> {{ data.city }},
          {{ data.country }}
        </p>
        <p>
          <strong class="text-gray-800">DOB:</strong>
          {{ new Date(data.dob).toLocaleDateString() }}
        </p>
        <p><strong class="text-gray-800">Gender:</strong> {{ data.gender }}</p>
      </div>
    </div>
    <div class="md:col-span-2">
      <h1 class="text-3xl font-bold">{{ data.name }}</h1>
      <p class="text-gray-600 mt-1">{{ data.jobTitle }} @ {{ data.company }}</p>
      <p class="mt-6 leading-7">{{ data.bio }}</p>
      <div class="mt-8">
        <NuxtLink
          to="/search"
          class="inline-flex items-center gap-2 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >Back to Search</NuxtLink
        >
      </div>
    </div>
  </section>

  <LoadingSpinner v-else-if="status === 'pending'" />
  <ErrorState v-else :message="String(error)" />
</template>
