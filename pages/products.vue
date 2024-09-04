<template>
  <div class="grid gap-4">
    <header class="flex items-center justify-between">
      <div class="grow">
        <h1>Products</h1>
        <p class="text-sm">Here are our available products</p>
      </div>
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
      <UserItem />
    </header>

    <main class="grid gap-4">
      <div class="grid gap-4 grid-cols-1 md:grid-cols-3 place-content-center">
        <Card
          v-for="item in data"
          class="grid gap-2 place-content-center rounded-xl"
          v-if="data"
        >
          <CardHeader>
            <CardTitle class="text-xl">{{ item.title }}</CardTitle>
            <CardDescription class="text-sm">{{
              item.description
            }}</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              :src="item.image"
              :alt="item.title"
              class="w-[300px] h-[300px] object-fit rounded-full"
            />
          </CardContent>
          <CardFooter> ${{ item.price }}</CardFooter>
        </Card>
        <Skeleton
          class="w-[300px] h-[500px] rounded-xl"
          v-for="i in 20"
          v-else
        />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const { data } = useFetch("https://fakestoreapi.com/products");
</script>
<style scoped></style>
