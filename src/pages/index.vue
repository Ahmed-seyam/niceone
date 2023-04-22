<script setup lang="ts">
defineOptions({
  name: "IndexPage",
});

const router = useRouter();
router.push("/home");
</script>

<template>
  <div></div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
