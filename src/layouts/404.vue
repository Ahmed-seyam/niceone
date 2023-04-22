<script setup lang="ts">
// const router = useRouter()
// const { t } = useI18n()
</script>

<template>
  <div class="error_page dark:bg-black">
    <div class="error_page__oops !dark:color-secondary-dark">oops!</div>

    <p class="error_page__text dark:color-grey-light-3">
      page not found
      <router-link class="error_page__link" to="/home">
        go to home page
      </router-link>
    </p>

    <span class="!dark:color-secondary-dark">404</span>

    <!-- <img src="/images/robot.png" alt="robot" class="error_page__robot dark:brighness-[80%]  dark:conrtast-[120%] ">
    <img
      src="/images/white_wave.png"
      alt="white_wave"
      class="error_page__wave dark:brightness-[10%]"
    > -->
  </div>
</template>
