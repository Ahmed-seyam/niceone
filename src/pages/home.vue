<script setup>
const car = ref(null);
</script>

<template>
  <div>
    <app-header></app-header>
    <app-categories></app-categories>
    <home-category-section></home-category-section>
    <home-category-section></home-category-section>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
