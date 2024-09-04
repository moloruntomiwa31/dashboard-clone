<template>
  <div
    class="flex flex-col items-center  gap-4 md:justify-between min-w-full md:flex-row"
  >
    <div class="grid md:place-content-center gap-4">
      <Avatar class="w-[180px] h-[180px]" />
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="picture">Picture</Label>
        <Input id="picture" type="file" class="w-[180px]" />
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-4">
      <div v-for="field in inputFields" :key="field.label">
        <Label>{{ field.label }}</Label>
        <Input class="min-w-[350px]" :placeholder="field.placeholder" :type="field.type" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const inputFields = [
  {
    label: "Your email address",
    value: "",
    placeholder: "Enter your email address",
    type: "email",
  },
  {
    label: "Your password",
    value: "",
    placeholder: "Enter your password",
    type: "password",
  },
  {
    label: "Your username",
    value: "",
    placeholder: "Enter your username",
    type: "text",
  },
];
</script>

<style scoped></style>
