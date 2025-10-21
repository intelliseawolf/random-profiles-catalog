<template>
  <NuxtLayout>
    <div class="min-h-screen bg-gray-50 text-gray-900">
      <header class="border-b bg-white/80 backdrop-blur sticky top-0 z-10">
        <nav class="container flex items-center justify-between py-4">
          <NuxtLink
            to="/"
            class="font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded px-1"
            >Random Profiles</NuxtLink
          >
          <div class="flex gap-3">
            <NuxtLink
              to="/search"
              class="text-sm px-3 py-1.5 rounded bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              >Search</NuxtLink
            >
            <a
              href="https://testingbot.com/free-online-tools/free-avatar-generator"
              target="_blank"
              rel="noopener"
              class="text-sm px-3 py-1.5 rounded bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              >Avatars</a
            >
          </div>
        </nav>
      </header>
      <main class="container py-8">
        <NuxtPage />
      </main>
      <footer class="border-t py-8 text-center text-sm text-gray-600">
        Built with Nuxt 4 · Faker · TestingBot Avatars · Zod
      </footer>
    </div>
  </NuxtLayout>
</template>
