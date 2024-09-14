<template>
  <div class="grid gap-4">
    <header class="flex flex-col items-start md:flex-row  md:items-center justify-between">
      <div class="grow">
        <h1>Overview</h1>
        <p class="text-sm">Here is the information about all your orders</p>
      </div>
      <UserItem />
    </header>

    <main class="grid gap-4">
      <div class="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-start">
        <Card
          v-for="(item, index) in cards"
          :key="index"
          :card="item"
        />
      </div>
      <div class="min-w-full">
        <Chart />
      </div>
    </main>

    <footer>
      <DataTable :columns :data />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { columns } from "../column";

const data = ref<any[]>([]);
//generate data
const generateRandomData = (num: number) => {
  const statuses = ["Pending", "Completed", "Cancelled", "In Progress"];
  const locations = ["New York", "London", "Tokyo", "Sydney", "Berlin"];
  const actions = ["View", "Edit", "Delete"];
  const names = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
    "Emma Wilson",
  ];

  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const data = [];

  for (let i = 0; i < num; i++) {
    const randomObject = {
      no: i + 1,
      id: Math.floor(Math.random() * 100000),
      date: new Date(Date.now() - Math.floor(Math.random() * 10000000000))
        .toISOString()
        .split("T")[0],
      customerName: getRandomElement(names),
      location: getRandomElement(locations),
      amount: (Math.random() * 1000).toFixed(2),
      status: getRandomElement(statuses),
      action: getRandomElement(actions),
    };
    data.push(randomObject);
  }

  return data;
};
onMounted(() => {
  data.value = generateRandomData(10);
});
//
const list = ref([
  {
    title: "Today",
  },
  {
    title: "Week",
  },
  {
    title: "Month",
  },
  {
    title: "Year",
  },
]);

const cards = [
  {
    title: "Total Users",
    progression: 10.2,
    amount: "89,935",
    description: "+1.01% per week",
    icon: "fluent-mdl2:arrow-up-right",
    detail: "ph:users-duotone",
    color: "#4ADE80",
  },
  {
    title: "Total Products",
    progression: 3.1,
    amount: "23,283",
    description: "+0.49% this week",
    icon: "fluent-mdl2:arrow-up-right",
    detail: "eos-icons:products-outlined",
    color: "#EC4899",
  },
  {
    title: "Total Users",
    progression: 2.56,
    amount: "46,427",
    description: "-0.91% this week",
    icon: "ph:arrow-down-left",
    detail: "simple-line-icons:check",
    color: "#FBBF24",
  },
  {
    title: "Refunded",
    progression: 7.2,
    amount: "124,854",
    description: "+1.51% this week",
    icon: "fluent-mdl2:arrow-up-right",
    detail: "lets-icons:refund-forward-light",
    color: "#22D3EE",
  },
];
</script>

<style scoped></style>
