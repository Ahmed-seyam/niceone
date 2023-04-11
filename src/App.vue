<script setup lang="ts">
useHead({
  title: "vnoun documentation",
  meta: [
    {
      name: "description",
      content:
        "vnoun is a template for clothes shops, you can get it from codecanyon",
    },
    {
      name: "theme-color",
      content: computed(() => (isDark.value ? "#00aba9" : "#ffffff")),
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "",
    },
  ],
});
</script>

<template>
  <body class="dark:bg-dark-quadratic">
    <div id="app">
      <RouterView />
    </div>
  </body>
</template>
