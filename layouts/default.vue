<template>
  <div class="grid lg:flex items-start">
    <div>
      <Sidebar />
    </div>
    <div
      class="p-6 max-w-full overflow-y-auto h-screen dark:bg-black dark:text-white"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
