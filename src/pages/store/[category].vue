<script setup>
const filter = ref(null);

const openFilter = () => {
  filter.value.openFilter();
};
</script>

<template>
  <div class="p-[2rem_3rem] min-h-[100vh]">
    <header
      class="bg-white rounded-[2rem] p-[2rem_3rem] relative autogrid justify-between items-start overflow-hidden basicshadow"
    >
      <img
        src="/images/background_1.svg"
        class="absolute left-0 top-0 w-[100%] h-[auto] object-contain opacity-[7%]"
        alt=""
      />

      <div>
        <h2 class="w-[fit-content] text-[2rem] font-extranbold m-b-1rem">
          اجود انواع العطور
        </h2>

        <p class="color-[var(--bluegray-500)] font-bold">تألقي مع نايس وان</p>
      </div>

      <img
        src="/images/categories/Asset 35.svg"
        class="w-[8rem] h-[8rem] p-1rem bg-[var(--bluegray-100)] rounded-full"
        alt=""
      />
    </header>

    <main
      class="grid grid-cols-[repeat(auto-fit,minMax(max-content,18rem))] justify-between p-[2rem_0] gap-[2rem]"
    >
      <product-main-card v-for="i in 30"></product-main-card>
    </main>

    <Button
      severity="primary"
      class="element-to-shake-once !fixed z-9 right-3rem bottom-3rem justify-start !rounded-full"
      @click="openFilter"
    >
      <div
        class="grid grid-cols-[min-content_1fr] gap-5 justify-items-start !w-[100%] !p-[0rem_0] items-center"
      >
        <div i-carbon:filter class="w-[1.3rem]"></div>

        <span class="!text-1.3rem ltr:p-r-2rem rtl:p-l-2rem"> فرز </span>
      </div>
    </Button>

    <app-filter ref="filter"></app-filter>
  </div>
</template>
