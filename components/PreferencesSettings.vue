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
      <div v-for="field in prefrencesField" :key="field.id">
        <Label :for="field.id" class="text-lg">{{ field.label }}</Label>
        <Input
          v-if="field.type !== 'select'"
          :id="field.id"
          :type="field.type"
          v-model="field.value"
          :placeholder="field.placeholder"
          required
          class="min-w-[350px]"
        />
        <Select
          v-else
          v-model="field.value"
          required
          :disabled="field.disabled"
          class="min-w-[350px]"
        >
          <SelectTrigger>
            <SelectValue :placeholder="field.placeholder" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup v-for="(option, index) in field.options" :key="index">
              <SelectItem :value="option"> {{ option }} </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const colorMode = useColorMode();
const isDarkMode = computed(() => colorMode.preference === "dark");

const prefrencesField = ref([
  {
    id: "accessibility",
    label: "Accessibility",
    type: "text",
    placeholder: "Enter your accessibility",
    value: "",
    disabled: false,
  },
  {
    id: "language",
    label: "Language",
    type: "select",
    options: ["English", "French", "Spanish"],
    placeholder: "Select your language",
    value: "English",
    disabled: false,
  },
  {
    id: "timezone",
    label: "Timezone",
    type: "select",
    options: ["GMT", "GMT+1", "GMT+2"],
    placeholder: "Select your timezone",
    value: "GMT",
    disabled: false,
  },
  {
    id: "currency",
    label: "Currency",
    type: "select",
    options: ["USD", "EUR", "GBP", "JPY", "CNY"],
    placeholder: "Select your currency",
    value: "USD",
    disabled: false,
  },
  {
    id: "theme",
    label: "Theme",
    type: "select",
    options: ["Light", "Dark"],
    placeholder: "Select your theme",
    value: isDarkMode.value ? "Dark" : "Light",
    disabled: false,
  },
]);
watch(
  () => prefrencesField.value.find((field) => field.id === "theme").value,
  (newValue) => {
    colorMode.preference = newValue === "Dark" ? "dark" : "light";
  }
);
</script>

<style scoped></style>
