<script setup>
defineProps(["sizeOptions", "colorOptions", "product"]);
const value = ref(4.5);

const selectedSize = ref(null);
const selectedColor = ref(null);
</script>

<template>
  <div
    class="product__overview grid gap-[2rem] grid-cols-[1fr_max-content] justify-between"
  >
    <section
      class="max-w-[60rem] overflow-hidden relative grid grid-cols-1 gap-2rem basicshadow bg-white p-[2rem_0_0] rounded-2rem"
    >
      <div
        class="absolute ltr:right-2rem rtl:left-2rem top-2rem p-.7rem rounded-[.8rem] bg-white pointer"
      >
        <!-- <div i-carbon:favorite-filled class="color-[red]"></div> -->
        <div i-carbon:favorite class="color-[red]"></div>
      </div>

      <div
        class="m-x-2rem grid gap-x-2rem items-start grid-rows-[min-content_1fr] grid-cols-[max-content_1fr] border-r-7px border-[var(--bluegray-300)] p-[1rem_1rem_1rem_2rem] rounded-[1rem_7px_7px_1rem] bg-[var(--bluegray-50)] w-fit"
      >
        <img
          class="block col-[1/2] row-[1/3] w-[100%] h-[4rem] rounded-.5rem contrast-150"
          src="/images/brands/image.png"
          alt=""
        />

        <p class="col-[2/3] row-[1/2] text-1.1rem color-[var(--bluegray-900)]">
          من ماركة {{ "Now" }}
        </p>

        <p
          class="col-[2/3] row-[2/3] color-[var(--green-600)] font-bold text-[.8rem]"
        >
          منتج أصلي
        </p>
      </div>

      <div class="m-x-2rem">
        <h2 class="text-1.5rem font-medium">كونسيلر خافي عيوب العين</h2>

        <div class="autogrid w-fit text-1.1rem fontenglish">
          <Rating v-model="value" readonly :cancel="false" />
          <span class="color-[var(--indigo-600)] font-bold">
            {{ value }}
          </span>
          <span class="color-[var(--bluegray-400)]"> - ( 500 ) </span>
        </div>
      </div>

      <section class="m-x-2rem m-b-[-.5rem]">
        <h4 class="m-b-1rem">اختر الحجم</h4>
        <SelectButton
          v-model="selectedSize"
          :options="sizeOptions"
          optionLabel="value"
          dataKey="value"
          class="selectButtonSizes flex flex-wrap"
        >
          <template #option="slotProps">{{ slotProps.option.value }}</template>
        </SelectButton>
      </section>

      <section class="m-x-2rem">
        <h4 class="m-b-1rem">اختر لون</h4>

        <div class="flex items-center">
          <div
            class="transition-all border-3 pointer !w-3rem !h-3rem rounded-full m-l-.7rem justify-center w-fit"
            v-for="color in colorOptions"
            :style="{
              backgroundColor: color.value,
              borderColor: color.value,
            }"
            @click="selectedColor = color.value"
            :class="{
              'active_color border-3 !border-[var(--indigo-300)]':
                color.value === selectedColor,
            }"
          ></div>
        </div>

        <div
          class="m-b-1rem m-t-1rem grid grid-cols-2 gap-x-.6rem grid-rows-[min-content_max-content] items-end p-t-[1rem] w-[fit-content]"
        >
          <div
            class="col-[1/2] text-[1.3rem] row-[1/2] relative color-[var(--bluegray-500)] font-thin m-b-[-.1rem]"
          >
            <span
              class="absolute left-50% top-50% rotate-[-3deg] translate-x-[-40%] translate-y-[-150%] w-[80%] z-3 flex h-[1px] rounded-full bg-[var(--bluegray-400)]"
            ></span>
            50 ريال
          </div>

          <div class="col-[1/2] row-[2/3] text-[1.5rem]">
            <span class="font-[Jost,sans-serif] font-bold"> 43 </span>
            <span class="p-x-.1rem">ريال</span>
          </div>

          <div
            class="col-[2/3] row-[1/3] font-[Jost,sans-serif] font-medium p-.1rem rounded-[.5rem] bg-red/10 color-red text-[1rem] flex items-center justify-center"
          >
            17%
          </div>
        </div>
      </section>

      <div
        class="bg-[var(--indigo-50)] h-2rem !p-[3rem_2rem] flex items-center justify-between"
      >
        <Button
          rounded
          severity="primary"
          class="w-[100%] flex justify-center !p-x-3rem"
          >اضف الي السلة</Button
        >
      </div>
    </section>

    <div
      class="sticky top-0 carousel w-[30rem] basicshadow bg-white p-2rem h-min rounded-2rem grid-rows-[min-content] items-start"
    >
      <Splide
        class="splide-carousel__container overflow-hidden"
        :options="{
          arrows: false,
          wheel: true,
          direction: 'ttb',
          releaseWheel: true,
          cover: false,
          heightRatio: 1.1,
        }"
        :has-track="false"
      >
        <SplideTrack class="splide-carousel__track w-[100%] h-[100%]">
          <SplideSlide
            v-for="category in 5"
            :key="category"
            class="w-[100%] h-[100%]"
          >
            <div class="flex flex-col justify-center h-[100%]">
              <Image
                src="/images/products/image.png"
                alt="Image"
                class="w-[100%] h-[auto] object-cover brightness-95"
                preview
              />
            </div>
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.selectButtonSizes {
  & > :deep(.p-button) {
    border-radius: 0 !important;
    border: 1px solid #ddd !important;
    margin-left: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
}

.active_color {
  transform: scale(0.8);
}
</style>
