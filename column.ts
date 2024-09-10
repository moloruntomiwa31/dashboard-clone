import { ListFilterIcon } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
import AlertDialog from "./components/ui/alert-dialog/AlertDialog.vue";

const statusColors: { [key: string]: string } = {
  Pending: "bg-orange-500",
  Completed: "bg-green-500",
  Cancelled: "bg-red-500",
  "In Progress": "bg-yellow-500",
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "no",
    header: () =>
      h(
        "div",
        { class: "text-left font-bold text-black dark:text-white" },
        "No"
      ),
  },
  {
    accessorKey: "id",
    header: () => {
      return h(
        "div",
        {
          class:
            "text-left font-bold text-black dark:text-white flex items-center",
        },
        ["ID", h(ListFilterIcon, { class: "ml-1 w-3 text-blue-500" })]
      );
    },
    cell: ({ row }: any) => {
      const id = row.getValue("id");
      return h(
        "div",
        { class: "text-left text-black dark:text-white" },
        "#" + id
      );
    },
  },
  {
    accessorKey: "date",
    header: () =>
      h(
        "div",
        { class: "text-left font-bold text-black dark:text-white" },
        "Date"
      ),
    cell: ({ row }: any) => {
      const date = row.getValue("date");
      let formatedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      return h(
        "div",
        { class: "text-left text-black dark:text-white" },
        formatedDate
      );
    },
  },
  {
    accessorKey: "customerName",
    header: () => {
      return h(
        "div",
        {
          class:
            "text-left font-bold text-black dark:text-white flex items-center",
        },
        [
          "Customer Name",
          h(ListFilterIcon, { class: "ml-1 w-3 text-blue-500" }),
        ]
      );
    },
  },
  {
    accessorKey: "location",
    header: () =>
      h(
        "div",
        { class: "text-left font-bold text-black dark:text-white" },
        "Location"
      ),
  },
  {
    accessorKey: "amount",
    header: () => {
      return h(
        "div",
        {
          class:
            "text-left font-bold text-black dark:text-white flex items-center",
        },
        ["Amount", h(ListFilterIcon, { class: "ml-1 w-3 text-blue-500" })]
      );
    },
    cell: ({ row }: any) => {
      const amount = row.getValue("amount");
      return h(
        "div",
        { class: "text-left text-black dark:text-white" },
        "₦" + amount
      );
    },
  },
  {
    accessorKey: "status",
    header: () => {
      return h(
        "div",
        {
          class:
            "text-left font-bold text-black dark:text-white flex items-center",
        },
        ["Status", h(ListFilterIcon, { class: "ml-1 w-3 text-blue-500" })]
      );
    },
    cell: ({ row }: any) => {
      const status = row.getValue("status");
      const colorClass = statusColors[status];
      return h(
        "div",
        {
          class:
            "flex items-center text-left text-black dark:text-white border rounded p-2",
        },
        [
          h("span", { class: `w-2 h-2 rounded-full mr-2 ${colorClass}` }),
          status,
        ]
      );
    },
  },
  {
    accessorKey: "action",
    header: () =>
      h(
        "div",
        { class: "text-left font-bold text-black dark:text-white" },
        "Action"
      ),
    cell: ({ row }: any) => {
      const action = row.getValue("action");
      const showDialog = ref(false);

      const handleButtonClick = () => {
        showDialog.value = true;
        console.log("Button clicked for action:", action);
      };

      const handleDialogClose = () => {
        showDialog.value = false;
        // Additional logic for handling dialog close, if needed
      };

      return h("div", { class: "relative" }, [
        h(
          Button,
          {
            click: handleButtonClick,
            class: "w-full",
          },
          {
            default: () => action,
          }
        ),
        showDialog.value &&
          h(AlertDialog, {
            onClose: handleDialogClose,
            // Pass any other required props to the AlertDialog component
          }),
      ]);
    },
  },
];
