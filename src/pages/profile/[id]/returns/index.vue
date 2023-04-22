<script setup>
import { useToast } from "primevue/usetoast";

const products = computed(() => [
  {
    name: "532622211",
    currency: "usd",
    price: "100",
    status: "success",
    quantity: "3",
    image: "image.png",
  },

  {
    name: "product 1",
    currency: "usd",
    price: "100",
    status: "success",
    quantity: "4",
    image: "image.png",
  },

  {
    name: "product",
    currency: "usd",
    price: "100",
    status: "pending",
    quantity: "10",
    image: "image.png",
  },

  {
    name: "product",
    currency: "usd",
    price: "100",
    status: "failed",
    quantity: "1",
    image: "image.png",
  },
]);

const toast = useToast();
const selectedOrder = ref(null);
const router = useRouter();
const onRowSelect = (event) => {
  router.push("/order/" + selectedOrder.value.id);
};

const onRowUnselect = (event) => {
  // console.log("un selected");
};

const getServity = (status) => {
  let res = "";
  switch (status) {
    case "success":
      res = "success";
      break;

    case "failed":
      res = "danger";
      break;

    default:
      res = "secondary";
      break;
  }

  return res;
};
</script>

<template>
  <div class="p-2rem grid grid-cols-1 gap-2rem">
    <DataTable
      :value="products"
      tableStyle="min-width: 50rem"
      @rowSelect="onRowSelect"
      @rowUnselect="onRowUnselect"
      selectionMode="single"
      v-model:selection="selectedOrder"
    >
      <Column field="image" header="image" sortable style="width: 20%"></Column>
      <Column field="name" header="name" sortable style="width: 20%"></Column>

      <Column field="quantity" header="quantity" sortable style="width: 20%">
      </Column>

      <Column field="currency" header="currency" sortable style="width: 20%">
      </Column>

      <Column field="price" header="price" sortable style="width: 20%"></Column>
      <Column field="status" header="status" sortable style="width: 20%">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getServity(data.status)" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>
