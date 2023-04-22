<script setup>
import { useToast } from "primevue/usetoast";

const orders = computed(() => [
  {
    id: "532622211",
    currency: "usd",
    amount: "100",
    status: "success",
    shipping_status: "pending",
  },

  {
    id: "155123112313",
    currency: "usd",
    amount: "100",
    status: "success",
    shipping_status: "success",
  },

  {
    id: "532622211",
    currency: "usd",
    amount: "100",
    status: "pending",
    shipping_status: "pending",
  },

  {
    id: "532622211",
    currency: "usd",
    amount: "100",
    status: "failed",
    shipping_status: "failed",
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
    <div class="flex flex-wrap">
      <StatsCard
        color="yellow"
        class="ltr:m-r-1rem ltr:last:m-r-0 rtl:m-l-1rem rtl:last:m-l-0"
      >
        <template #image>
          <img src="/images/banking/SVG/Asset_10.svg" alt="" />
        </template>
        <template #heading> spent </template>
        <template #value> 1200$ </template>
      </StatsCard>

      <StatsCard
        color="green"
        class="ltr:m-r-1rem ltr:last:m-r-0 rtl:m-l-1rem rtl:last:m-l-0"
      >
        <template #image>
          <img src="/images/ecommerce/SVG/Asset_14.svg" alt="" />
        </template>
        <template #heading> completed orders </template>
        <template #value> 6 </template>
      </StatsCard>

      <StatsCard
        color="bluegray"
        class="ltr:m-r-1rem ltr:last:m-r-0 rtl:m-l-1rem rtl:last:m-l-0"
      >
        <template #image>
          <img src="/images/ecommerce/SVG/Asset_6.svg" alt="" />
        </template>
        <template #heading> pending orders </template>
        <template #value> 2 </template>
      </StatsCard>
    </div>

    <DataTable
      :value="orders"
      tableStyle="min-width: 50rem"
      @rowSelect="onRowSelect"
      @rowUnselect="onRowUnselect"
      selectionMode="single"
      v-model:selection="selectedOrder"
    >
      <Column field="id" header="id" sortable style="width: 20%"></Column>
      <Column field="currency" header="currency" sortable style="width: 20%">
      </Column>
      <Column
        field="amount"
        header="amount"
        sortable
        style="width: 20%"
      ></Column>
      <Column field="status" header="status" sortable style="width: 20%">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getServity(data.status)" />
        </template>
      </Column>

      <Column
        field="shipping_status"
        header="shipping"
        sortable
        style="width: 20%"
      >
        <template #body="{ data }">
          <Tag
            :value="data.status"
            :severity="getServity(data.status)"
          /> </template
      ></Column>
    </DataTable>
  </div>
</template>
