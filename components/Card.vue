<template>
  <Card class="w-[180px] md:w-[200px] lg:w-[220px] dark:text-white text-black">
    <CardHeader class="px-4 py-2">
      <div class="text-lg lg:text-2xl font-bold flex justify-between items-center">
        <span>{{ card.amount }}</span>
        <div class="shadow rounded-xl w-10 h-10 p-2 text-center">
            <Icon :name="card.detail" class="text-blue-500" />
        </div>
      </div>
    </CardHeader>
    <CardContent
      class="flex items-center justify-start px-4 pt-0 pb-2 border-b"
    >
      <div class="w-full">
        <p class="text-sm lg:text-base">{{ card.title }}</p>
        <div class="flex items-center justify-between">
          <span class="text-xs">
            <Icon
              size="10"
              :name="card.icon"
              :class="card.progression < 3 ? 'text-red-600 dark:text-red-500' : 'text-green-500 dark:text-green-300'"
            />{{ card.progression }}</span
          >
          <span class="text-xs">{{ card.description }}</span>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

defineProps(["card"]);
</script>

<style scoped></style>
