<template>
  <div
    class="flex flex-col items-center gap-4 md:justify-between min-w-full md:flex-row"
  >
    <div class="grid md:place-content-center gap-4">
      <Avatar class="w-[180px] h-[180px]" />
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="picture">Picture</Label>
        <Input id="picture" type="file" class="w-[180px]" />
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-4">
      <div v-for="field in 4" >
        <Label>{{ field }}</Label>
        <Input
          class="min-w-[350px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
</script>

<style scoped></style>
