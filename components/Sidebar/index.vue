<template>
  <div class="relative">
    <div
      class="flex lg:hidden items-center justify-between w-full min-h-full p-4 z-50"
    >
      <Logo />
      <Icon
        size="30"
        class="z-50 cursor-pointer left-2 top-2"
        name="iconamoon:menu-burger-horizontal"
        @click="open = true"
      />
      <div
        v-if="open"
        class="absolute top-0 left-0 z-50 w-full min-h-screen bg-neutral-50 dark:bg-neutral-900"
      >
        <Icon
          size="30"
          class="z-50 cursor-pointer top-4 absolute right-4"
          name="material-symbols:close"
          @click="open = false"
        />
        <SidebarMenu @close="open = false"/>
      </div>
    </div>
    <div
      class="hidden lg:flex w-[250px] xl:w-[280px] min-h-screen flex-col justify-between border-r"
    >
      <SidebarMenu />
      <div class="grid gap-2 mb-4">
        <div class="flex items-center space-x-2 m-2">
          <Switch
            id="theme"
            :checked="isDarkMode"
            @update:checked="toggleTheme"
          />
          <Label>{{ isDarkMode ? "Dark Mode" : "Light Mode" }}</Label>
          <Icon
            size="30"
            :name="isDarkMode ? 'lucide:moon' : 'akar-icons:sun-fill'"
            class="text-blue-500"
          />
        </div>
        <NuxtLink
          v-for="item in links"
          :key="item.title"
          :to="item.to"
          class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer"
          :class="
            item.title === 'Logout'
              ? 'text-red-600 font-bold'
              : 'text-gray-600 dark:text-white'
          "
        >
          <Icon size="20" :name="item.icon" color="black" />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Switch } from "@/components/ui/switch";
import { Label } from '@/components/ui/label'

//color Mode
const colorMode = useColorMode();
const isDarkMode = computed(() => colorMode.preference === "dark");

const toggleTheme = (checked: boolean) => {
  colorMode.preference = checked ? "dark" : "light";
};

const open = ref(false);
const links = [
  {
    title: "Help Center",
    icon: "icon-park-solid:helpcenter",
    to: "/",
  },
  {
    title: "Contact",
    icon: "teenyicons:contact-outline",
    to: "/",
  },
  {
    title: "Logout",
    icon: "ic:baseline-logout",
    to: "/",
  },
];
</script>

<style scoped></style>
