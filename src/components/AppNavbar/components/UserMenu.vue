<script setup>
import { useToast } from "primevue/usetoast";

const items = ref([
  { separator: true },
  { label: "Profile", icon: "pi pi-fw pi-user" },
  { label: "Settings", icon: "pi pi-fw pi-cog" },
  { separator: true },
]);

const toast = useToast();

const profileClick = () => {
  toast.add({
    severity: "info",
    summary: "Info",
    detail: "Item Selected",
    life: 3000,
  });
};
</script>

<template>
  <div class="card flex justify-content-center">
    <Menu :model="items">
      <template #start>
        <button
          @click="profileClick"
          class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround"
        >
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            class="mr-2"
            shape="circle"
          />
          <div class="flex flex-col align">
            <span class="font-bold">Amy Elsner</span>
            <span class="text-sm">Agent</span>
          </div>
        </button>
      </template>
      <template #end>
        <button
          class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround"
        >
          <i class="pi pi-sign-out" />
          <span class="ml-2">Log Out</span>
        </button>
      </template>
    </Menu>
  </div>
</template>
