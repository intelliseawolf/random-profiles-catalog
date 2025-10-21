<script setup lang="ts">
import ProfileCard from "~/components/ProfileCard.vue";
import ErrorState from "~/components/ErrorState.vue";
import SkeletonCard from "~/components/SkeletonCard.vue";
import { useApiClient } from "~/composables/useApiClient";
import type { Profile } from "~/types/profile";

useSeo(
  "Search · Random Profiles",
  "Get exactly 10 random profiles from the local API."
);

const seed = ref("");
const { listProfiles } = useApiClient();

const { data, error, status, refresh } = await useAsyncData<Profile[]>(
  () => `search-${seed.value}`,
  () => listProfiles(10, seed.value || undefined),
  { server: false, lazy: true }
);

function doSearch() {
  refresh();
}
</script>

<template>
  <section aria-labelledby="search-heading" class="space-y-6">
    <h1 id="search-heading" class="text-2xl font-bold">Search Results (10)</h1>

    <form @submit.prevent="doSearch" class="flex flex-wrap gap-3 items-end">
      <label class="block">
        <span class="block text-sm font-medium text-gray-700"
          >Deterministic Seed (optional)</span
        >
        <input
          v-model="seed"
          type="text"
          placeholder="e.g. alice@example.com"
          class="mt-1 w-72 rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </label>
      <button
        type="submit"
        class="px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      >
        Generate 10
      </button>
    </form>

    <div
      v-if="status === 'pending'"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
    >
      <SkeletonCard v-for="i in 10" :key="i" />
    </div>

    <ErrorState v-else-if="error" :message="String(error)" />

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
    >
      <ProfileCard v-for="p in data" :key="p.id" :profile="p" />
    </div>
  </section>
</template>
