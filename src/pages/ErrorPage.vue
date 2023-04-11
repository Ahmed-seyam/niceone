<template>
  <div class="error_page">
    <div class="error_page__oops">
      oops!
    </div>

    <p class="error_page__text">
      page not found
      <router-link class="error_page__link" to="/home">
        go to home page
      </router-link>
    </p>

    <span>404</span>

    <img src="/images/robot.png" alt="robot" class="error_page__robot">
    <img
      src="/images/white_wave.png"
      alt="white_wave"
      class="error_page__wave"
    >
  </div>
</template>
