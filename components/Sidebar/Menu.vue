<template>
  <div>
    <header class="hover:scale-[101%] transition cursor-pointer">
      <div class="flex items-center p-4 gap-2">
        <Logo />
        <p class="font-bold text-black leading-4 dark:text-white">Aeon</p>
      </div>
    </header>
    <div class="grow">
      <div class="grid gap-2 relative">
        <NuxtLink
          v-for="item in items"
          :key="item.title"
          :to="item.path"
          class="px-2 py-1 transition rounded cursor-pointer relative text-gray-600 dark:text-white"
          :class="
            item.title == 'Checkout' ? 'flex items-center justify-between' : ''
          "
          active-class="text-blue-500 font-bold active-link
          "
        >
          <div class="flex items-center gap-2">
            <Icon size="20" :name="item.icon" color="black" />
            <span>{{ item.title }}</span>
          </div>
          <div
            v-if="item.title == 'Checkout'"
            class="flex items-center justify-center w-2 h-2 p-2 text-xs bg-red-600 rounded-full text-white"
          >
            <span>3</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ref([
  {
    title: "Overview",
    path: "/",
    icon: "material-symbols:overview-key-outline",
  },
  {
    title: "Products",
    path: "/products",
    icon: "eos-icons:products-outlined",
  },
  {
    title: "Orders",
    path: "/",
    icon: "material-symbols:draft-orders-sharp",
  },
  {
    title: "Checkout",
    path: "/",
    icon: "carbon:wireless-checkout",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: "ri:settings-line",
  },
]);
</script>

<style scoped>
.active-link::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background-color: #2563eb;
  border-radius: 50% 0 0 50%;
}
</style>
