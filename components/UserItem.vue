<template>
  <div class="my-2 md:my-0 md:p-2 md:m-2 flex justify-start items-center gap-2">
    <div class="flex items-center justify-between">
      <Icon name="ic:outline-search" color="black" size="20" />
      <div class="relative">
        <div
          class="w-1 h-1 rounded-full bg-red-600 absolute top-0 right-0"
        ></div>
        <Icon
          name="clarity:notification-line"
          color="black"
          size="20"
          class="ml-4"
        />
      </div>
    </div>
    <Avatar class="w-10 h-10" />
    <div>
      <p class="text-black text-sm font-bold m-0 leading-1 dark:text-white">
        Oloruntomiwa
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
