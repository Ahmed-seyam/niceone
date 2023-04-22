<script setup>
const visible = ref(false);
const open = () => {
  visible.value = true;
};

defineExpose({
  open,
});
</script>

<template>
  <div class="card flex justify-content-center">
    <Sidebar
      v-model:visible="visible"
      class="!w-full !md:w-35rem relative !bg-[var(--bluegray-50)] grid grid-rows-[min-content_1fr_max-content]"
    >
      <h3
        class="absolute bg-white justify-start text-[1.3rem] p-x-[1.5rem] w-[100%] p-y-1rem z-[-1] left-0% top-[0] autogrid gap-3"
      >
        <div
          i-carbon:favorite-filled
          class="color-[var(--red-500)] w-[1.3rem] h-1.3rem"
        ></div>
        المفضله
      </h3>

      <div class="items grid grid-cols-1 p-t-2rem gap-4 m-b-2rem">
        <product-secondary-card v-for="i in 10" :type="'whishlist'">
        </product-secondary-card>
      </div>
    </Sidebar>
  </div>
</template>
