<script setup>
const drag = ref(false);
const navigate = () => {};

const { locale } = useI18n();

const splide = ref(null);

const direction = computed(() => (locale === "en" ? "ltr" : "rtl"));
</script>

<template>
  <section class="p-x-[3rem] p-y-[2rem] m-b-2rem">
    <h3
      class="text-[1.3rem] p-b-[2rem] autogrid capitalize w-[fit-content] gap-3 color-[var(--bluegray-700)]"
    >
      <div i-carbon:categories></div>

      explore categories
    </h3>

    <div class="categories">
      <router-link
        to="/store/category"
        class="category flex flex-col items-center p-y-[2rem] p-x-[4rem] transition bg-white shadow-[0_0_.5rem_rgba(0,0,0,.06)] hover:shadow-[0_0_2rem_rgba(0,0,0,.09)] p-[1rem_2rem] rounded-[2rem]"
      >
        <div
          class="h-7rem w-7rem rounded-full p-1rem bg-[var(--bluegray-100)] flex items-center justify-center"
        >
          <img
            src="/images/categories/SVG/Asset32.svg"
            class="w-[100%] h-[100%]"
            alt=""
          />
        </div>

        <h5
          class="capitalize text-[1.3rem] p-[1.5rem_0_0rem] text-center font-extrabold color-[var(--bluegray-700)]"
        >
          perfumes
        </h5>
      </router-link>

      <router-link
        to="/store/category"
        class="category flex flex-col items-center p-y-[2rem] p-x-[4rem] transition bg-white shadow-[0_0_.5rem_rgba(0,0,0,.06)] hover:shadow-[0_0_2rem_rgba(0,0,0,.09)] p-[1rem_2rem] rounded-[2rem]"
      >
        <div
          class="h-7rem w-7rem rounded-full p-1rem bg-[var(--bluegray-100)] flex items-center justify-center"
        >
          <img
            src="/images/categories/SVG/Asset33.svg"
            class="w-[100%] h-[100%]"
            alt=""
          />
        </div>

        <h5
          class="capitalize text-[1.3rem] p-[1.5rem_0_0rem] text-center font-extrabold color-[var(--bluegray-700)]"
        >
          perfumes
        </h5>
      </router-link>

      <router-link
        to="/store/category"
        class="category flex flex-col items-center p-y-[2rem] p-x-[4rem] transition bg-white shadow-[0_0_.5rem_rgba(0,0,0,.06)] hover:shadow-[0_0_2rem_rgba(0,0,0,.09)] p-[1rem_2rem] rounded-[2rem]"
      >
        <div
          class="h-7rem w-7rem rounded-full p-1rem bg-[var(--bluegray-100)] flex items-center justify-center"
        >
          <img
            src="/images/categories/SVG/Asset34.svg"
            class="w-[100%] h-[100%]"
            alt=""
          />
        </div>

        <h5
          class="capitalize text-[1.3rem] p-[1.5rem_0_0rem] text-center font-extrabold color-[var(--bluegray-700)]"
        >
          perfumes
        </h5>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss">
.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(max-content, 10rem));
  gap: 2rem;
}
</style>
