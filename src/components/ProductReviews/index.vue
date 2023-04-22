<script setup>
const drag = ref(false);
const navigate = () => {};

const { locale } = useI18n();

const splide = ref(null);

const direction = computed(() => (locale.value === "en" ? "ltr" : "rtl"));

const value = ref(5);
</script>

<template>
  <div class="grid grid-cols-2 gap-5 grid-rows-[min-content_max-content]">
    <h3 class="text-1.5rem autogrid w-fit gap-1rem">
      <div
        i-carbon:star-filled
        class="col-[1/2] row-[1/2] color-[var(--yellow-500)]"
      ></div>
      اخر التقييمات
    </h3>

    <Button
      severity="primary"
      rounded
      class="!text-[.8rem] w-fit justify-self-end"
    >
      عرض الكل
    </Button>

    <Splide
      v-if="locale"
      class="col-[1/3] row-[2/3] splide-carousel__container rounded-[1rem] overflow-hidden"
      :options="{
        autoWidth: true,
        pagination: false,
        direction: direction,
        arrows: false,
      }"
      :has-track="false"
    >
      <SplideTrack class="splide-carousel__track h-[100%] w-[100%]">
        <SplideSlide
          v-for="category in 8"
          class="w-[auto] h-[100%] p-y-[2rem] p-x-[.6rem]"
          @mousedown="drag = false"
          @mousemove="drag = true"
          @mouseup="drag ? (drag = false) : navigate($event)"
        >
          <div
            class="basicshadow w-[20rem] rounded-[2.5rem] !bg-[white] p-1.5rem"
          >
            <div
              class="m-b-2rem user grid grid-cols-[max-content_1fr] gap-x-1rem gap-y-5px w-fit items-start"
            >
              <img
                src="/images/users/image.png"
                class="w-2.5rem h-2.5rem rounded-full bg-[var(--indigo-100)] col-[1/2] row-[1/3]"
                alt=""
              />

              <h6 class="text-.8rem w-fit col-[2/3] row-[1/2]">احمد صيام</h6>

              <Rating
                class="col-[2/3] row-[2/3]"
                v-model="value"
                :cancel="false"
                readonly
              ></Rating>
            </div>

            <pre
              class="text-1rem overflow-y-scroll h-[10rem] color-[var(--bluegray-700)]"
            >
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minus. Dolorum necessitatibus consequatur cum dolor quae ad aperiam vel vitae.
            </pre>
          </div>
        </SplideSlide>
      </SplideTrack>
    </Splide>
  </div>
</template>

<style scoped>
:deep(.p-rating .p-rating-item .p-rating-icon) {
  font-size: 13px !important;
  color: var(--yellow-500);
}

:deep(.p-rating) {
  gap: 0.2rem;
}
</style>
