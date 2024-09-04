<template>
  <div class="grid gap-6 md:grid-cols-2">
    <div class="border p-4 rounded-lg grow w-1/2 md:w-full">
      <ClientOnly v-if="chartReady">
        <apexchart
          :key="chartKey"
          height="300"
          width="100%"
          :options="options"
          :series="series"
        ></apexchart>
      </ClientOnly>
      <Skeleton class="w-[100%] h-[300px] rounded" v-else />
    </div>
    <div class="border p-4 rounded-lg w-1/2 md:w-full">
      <!-- Additional content can go here -->
      <ClientOnly v-if="chartReady">
        <apexchart
          type="radialBar"
          height="330px"
          width="100%"
          :options="radialOptions"
          :series="radialSeries"
        ></apexchart>
      </ClientOnly>
      <Skeleton class="w-[100%] h-[300px] rounded" v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
const chartReady = ref(false);
const colorMode = useColorMode();
const textColor = ref("");
const isDarkMode = computed(() => colorMode.preference === "dark");

watch(isDarkMode, (newVal) => {
  newVal ? (textColor.value = "#fff") : (textColor.value = "#000");
});

const options = ref({
  chart: {
    type: "line",
    toolbar: {
      show: false,
    },
  },
  title: {
    text: "Order Analytics",
    align: "left",
    style: {
      fontSize: "20px",
      fontWeight: "bold",
      fontFamily: "inherit",
      color: textColor.value,
    },
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: undefined,
    width: 2,
    dashArray: 0,
  },
  xaxis: {
    categories: Array.from(
      { length: 10 },
      (_, i) => new Date().getFullYear() - i
    ),
    tooltip: {
      theme: true,
    },
    title: {
      text: "Year",
      color: textColor.value,
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    fontFamily: "inherit",
  },
});

const series = ref([
  {
    name: "Offline orders",
    data: [],
    color: textColor.value,
  },
  {
    name: "Online orders",
    data: [],
    color: textColor.value,
  },
]);

const radialOptions = ref({
  chart: {
    type: "radialBar",
  },
  title: {
    text: "Earnings",
    align: "left",
    style: {
      fontSize: "20px",
      fontWeight: "bold",
      fontFamily: "inherit",
      color: textColor.value,
    },
  },
  plotOptions: {
    radialBar: {
      track: { show: true },
      dataLabels: {
        name: {
          fontSize: "20px",
          fontFamily: "inherit",
        },
        value: {
          fontSize: "16px",
          fontFamily: "inherit",
        },
        total: {
          show: true,
          label: "Total",
          formatter: function (w) {
            return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
          },
        },
      },
    },
  },
  colors: ["#0000FF", "#008000", "#FFFF00"],
  labels: ["Offline orders", "Online orders", "Trade earnings"],
});

const radialSeries = ref([
  {
    name: "Offline orders",
    data: [],
  },
  {
    name: "Online orders",
    data: [],
  },
  {
    name: "Trade earnings",
    data: [],
  },
]);

const chartKey = ref(0);

const updateChart = () => {
  //generate array of random numbers of length 10
  const data1 = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );
  const data2 = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );
  series.value = [
    {
      name: "Offline orders",
      data: data1,
    },
    {
      name: "Online orders",
      data: data2,
    },
  ];

  //generate random data for radial chart
  const radialData = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * 100)
  );
  radialSeries.value = radialData;

  chartKey.value += 1;

  chartReady.value = true;
};

onMounted(() => {
  updateChart();
});
</script>

<style scoped></style>
