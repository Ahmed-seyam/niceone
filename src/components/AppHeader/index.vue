<script setup>
const drag = ref(false);
const navigate = () => {};

const { locale } = useI18n();

const splide = ref(null);

const direction = computed(() => (locale === "en" ? "ltr" : "rtl"));
</script>

<template>
  <header class="p-x-[3rem] p-y-[1rem]">
    <Splide
      v-if="locale"
      class="splide-carousel__container h-[30vw] rounded-[1rem] overflow-hidden"
      :options="{
        autoWidth: true,
        pagination: true,
        direction: direction,
        arrows: false,
      }"
      :has-track="false"
    >
      <SplideTrack class="splide-carousel__track h-[100%]">
        <SplideSlide
          v-for="category in 10"
          class="w-[100%] h-[100%] bg-grey-light-2"
          @mousedown="drag = false"
          @mousemove="drag = true"
          @mouseup="drag ? (drag = false) : navigate($event)"
        >
          <img
            src="/images/bannars/banner-1.jpg"
            alt="banner"
            class="w-[100%] h-[100%] object-cover"
          />
        </SplideSlide>
      </SplideTrack>
    </Splide>
  </header>
</template>
