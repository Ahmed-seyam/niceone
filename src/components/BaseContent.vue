<script setup>
defineProps(["link", "heading", "content"]);
</script>

<template>
  <div class="details m-l-[4rem]">
    <h4 class="m-b-[1rem] flex items-center">
      <div i-carbon:arrow-right class="m-r-[1rem] color-[green]"></div>
      {{ heading }}
    </h4>

    <slot name="content"></slot>
  </div>

  <div class="m-l-[4rem]" v-if="link">
    <router-link
      :to="link"
      class="!color-white p-x-[3rem] p-y-[1.5rem] rounded-[.5rem] bg-dark-secondary-dark"
      >Next</router-link
    >
  </div>
</template>
