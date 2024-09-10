<template>
  <div class="grid gap-4">
    <header class="flex items-center justify-between">
      <div class="grow">
        <h1>Settings</h1>
        <p class="text-sm">Modify your settiings here.</p>
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

    <main class="grid gap-4 md:border rounded p-6 min-w-full">
      <Tabs :default-value="settings[0].name" class="w-full">
        <TabsList>
          <TabsTrigger
            v-for="setting in settings"
            :key="setting.name"
            :value="setting.name"
          >
            {{ setting.title }}
          </TabsTrigger>
        </TabsList>
        <TabsContent
          v-for="setting in settings"
          :key="setting.name"
          :value="setting.name"
          class="py-4"
        >
          <component :is="setting.component" />
        </TabsContent>
      </Tabs>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const settings = [
  {
    name: "account",
    title: "Account",
    component: defineAsyncComponent(
      () => import("@/components/AccountSettings.vue")
    ),
  },
  {
    name: "preferences",
    title: "Preferences",
    component: defineAsyncComponent(
      () => import("@/components/PreferencesSettings.vue")
    ),
  },
];
</script>

<style scoped></style>
