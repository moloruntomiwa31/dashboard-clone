<template>
  <div class="grid gap-4">
    <header class="flex flex-col items-start md:flex-row  md:items-center justify-between">
      <div class="grow">
        <h1>Products</h1>
        <p class="text-sm">Here are our available products</p>
      </div>
      <UserItem />
    </header>

    <main class="grid gap-4">
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
        <Card
          v-for="item in data"
          class="flex flex-col justify-between items-center text-center rounded-xl"
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
              class="w-[150px] h-[150px] md:w-[200px] md:h-[200px] shadow-md object-fit rounded-full"
            />
          </CardContent>
          <CardFooter>Price - ${{ item.price }}</CardFooter>
        </Card>
        <Skeleton
          class="md:w-[300px] h-[400px] md:h-[500px] rounded-xl"
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
