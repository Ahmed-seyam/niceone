<script setup>
const drag = ref(false);
const navigate = () => {};

const { locale } = useI18n();

const splide = ref(null);

const direction = computed(() => (locale.value === "en" ? "ltr" : "rtl"));

const value = ref(5);
</script>

<template>
  <main class="p-2rem overflow-hidden">
    <overview-header></overview-header>

    <div class="special__offers m-t-2rem">
      <h2
        class="autogrid w-fit text-1.1rem font-bold uppercase color-[var(--bluegray-600)]"
      >
        <div i-carbon:fire class="color-[var(--bluegray-400)]"></div>
        special offers
      </h2>
      <p
        class="color-[var(--red-600)] uppercase font-bold text-.75rem m-x-1.7rem"
      >
        just for you
      </p>

      <div>
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
              v-for="i in 8"
              class="w-[auto] h-[100%] p-y-[2rem] ltr:first-p-l-0 rtl:first-p-r-0 p-x-[.6rem]"
              @mousedown="drag = false"
              @mousemove="drag = true"
              @mouseup="drag ? (drag = false) : navigate($event)"
            >
              <router-link to="/home">
                <img
                  src="/images/offers/image.svg"
                  class="w-15rem h-15rem bg-[var(--blue-50)]"
                  alt="offer"
                />
              </router-link>
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>
    </div>
  </main>
</template>
