<script setup>
const visible = ref(false);
const open = () => {
  visible.value = true;
};
const value1 = ref(null);

defineExpose({
  open,
});
</script>

<template>
  <div class="card flex justify-content-center">
    <Sidebar
      v-model:visible="visible"
      class="w-full !overflow-y-scroll !md:w-20rem !lg:w-30rem relative !bg-[var(--bluegray-50)] grid grid-rows-[min-content_max-content_1fr]"
    >
      <h3
        class="absolute bg-white justify-start text-[1.3rem] p-x-[1.5rem] w-[100%] p-y-1rem z-[-1] left-0% top-[0] autogrid gap-3"
      >
        <div
          i-carbon:search
          class="color-[var(--indigo-500)] w-[1.3rem] h-1.3rem"
        ></div>
        البحث
      </h3>

      <div class="col-[1/2] row-[2/3] p-y-1rem">
        <span class="p-input-icon-left w-full relative">
          <Button
            icon="pi pi-search"
            rounded
            class="!absolute !w-[3.5rem] !h-[3.5rem] left-0"
          >
          </Button>

          <InputText
            class="w-full !rounded-full !p-x-1.2rem !h-[3.5rem]"
            v-model="value1"
            placeholder="Search"
          />
        </span>
      </div>

      <div
        class="result m-t-1rem grid grid-cols-1 !overflow-hidden m-b-2rem bg-white rounded-[2rem] basicshadow color-black"
      >
        <router-link
          v-for="i in 10"
          to="/products/1"
          class="product__in__list p-1rem !last:border-0 border-[var(--bluegray-100)] !border-b-2 bg-white grid gap-3 grid-cols-[max-content_1fr] grid-rows-1 overflow-hidden"
        >
          <img
            src="/images/products/image.png"
            class="col-[1/2] row-[1/2] w-[5rem] h-[5rem] p-.5rem bg-[var(--bluegray-50)] rounded-1rem"
            alt=""
          />

          <div class="">
            <h3 class="text-[1.2rem]">كونسيلر خافي عيوب العين</h3>
            <span class="brand flex text-[.8rem]">Etude House</span>
          </div>
        </router-link>
      </div>
    </Sidebar>
  </div>
</template>
