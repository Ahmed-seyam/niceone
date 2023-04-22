<script setup>
const drag = ref(false);
const navigate = () => {};

const { locale } = useI18n();

const splide = ref(null);

const direction = computed(() => (locale.value === "en" ? "ltr" : "rtl"));
</script>

<template>
  <div class="p-x-[3rem]">
    <div class="banners grid grid-cols-1 gap-4">
      <app-banner v-for="i in 5"></app-banner>
    </div>

    <product-slider-list
      :icon="'i-carbon:list'"
      heading="وصل جديثا"
      class="m-t-4rem"
    ></product-slider-list>
  </div>
</template>
