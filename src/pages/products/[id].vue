<script setup>
const options = ref([
  { value: "زجاجة 100 ملل" },
  { value: "زجاجه 10 ملل" },
  { value: "زجاجه 150 ملل" },
  { value: "زجاجه 300 ملل" },
  { value: "زجاجه 500 ملل" },
  { value: "زجاجه 1000 ملل" },
]);

const colorOptions = ref([
  { value: "#e5f2c3" },
  { value: "#e5ddc3" },
  { value: "#ddddc3" },
  { value: "#99ddc3" },
]);

const active = ref(0);
const tabs = ref([
  {
    title: "الوصف",
    component: shallowRef(
      defineAsyncComponent(() =>
        import("@/components/ProductDescription/index.vue")
      )
    ),
  },
  {
    title: "المواصفات",
    component: shallowRef(
      defineAsyncComponent(() =>
        import("@/components/ProductSpecifications/index.vue")
      )
    ),
  },
]);
</script>

<template>
  <div class="product__page p-[2rem_3rem]">
    <product-details
      :size-options="options"
      :color-options="colorOptions"
    ></product-details>

    <div class="product__details"></div>

    <TabView
      :activeIndex="active"
      class="basicshadow rounded-2rem all overflow-hidden m-t-4rem"
    >
      <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
        <component :is="tab.component" class="!bg-white"></component>
      </TabPanel>
    </TabView>

    <product-reviews class="m-t-4rem"></product-reviews>

    <product-slider-list
      :icon="'i-carbon:list'"
      heading="منتجات متشابهة"
      class="m-t-4rem"
    ></product-slider-list>
    <div class="related__products"></div>
  </div>
</template>

<style lang="scss" scoped>
.selectButtonSizes {
  & > .p-button {
    border-radius: 0 !important;
    border: 1px solid #ddd !important;
    margin-left: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
}

.active_color {
  transform: scale(0.8);
}

:deep(.p-tabview .p-tabview-nav) {
  padding: 1rem 1rem 0;
}
</style>
