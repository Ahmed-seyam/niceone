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
          i-carbon:shopping-bag
          class="color-[var(--indigo-500)] w-[1.3rem] h-1.3rem"
        ></div>
        سلة التسوق
      </h3>

      <div class="items grid grid-cols-1 p-t-2rem gap-4 m-b-2rem">
        <product-secondary-card v-for="i in 10" :type="'cart'">
        </product-secondary-card>
      </div>

      <div
        class="checkout sticky bottom-0 w-[100%] color-[var(--bluegray-900)] z-9"
      >
        <div class="summary text-1.2rem rounded-[1rem] basicshadow !bg-white">
          <h6
            class="text-[1.2rem] p-[2rem_2rem_0] font-bold text-center color-[var(--indigo-500)] autogrid w-[fit-content]"
          >
            <div i-carbon:list></div>
            ملخص الطلبيه
          </h6>

          <ul class="text-1rem p-[1rem_2rem]">
            <li class="autogrid justify-between">
              <span class="font-bold">السعر</span>
              <span>150</span>
            </li>

            <li class="autogrid justify-between">
              <span class="font-bold">الخصم</span>
              <span>10</span>
            </li>

            <li class="autogrid justify-between">
              <span class="font-bold">الشحن</span>
              <span>20</span>
            </li>
          </ul>

          <div
            class="color-[var(--indigo-600)] p-[.5rem_2rem] font-bold text-[1rem]"
          >
            اجمالي السعر هو
            <span class="text-[var(--red-800)]">120 ريال</span>
          </div>

          <div class="flex p-[1rem_2rem_1rem]">
            <Button severity="primary" class="w-full !p-y-.5rem">
              <span class="w-full !text-center font-medium text-[1.1rem]"
                >ادفع 120 ريال</span
              >
            </Button>
          </div>
        </div>
      </div>
    </Sidebar>
  </div>
</template>
