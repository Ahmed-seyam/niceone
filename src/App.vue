<script setup lang="ts">
useHead({
  title: "NiceOne",
  meta: [
    {
      name: "description",
      content: "NiceOne",
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
      href: "/images/logo.png",
    },
  ],
});

onMounted(() => {
  (() => {
    let firstLoad = localStorage.getItem("first-load");
    if (!firstLoad) {
      localStorage.setItem("first-load", "yes");
      firstLoad = localStorage.getItem("first-load");
    }

    const mode = localStorage.getItem("vueuse-color-scheme");

    if (firstLoad == "yes" && mode !== "light") {
      toggleDark();
      localStorage.setItem("first-load", "no");
    }
  })();
});
</script>
<template>
  <div
    id="app dark:bg-dark-quadratic bg-grey-light-1 !ltr:font-[Karla,sans-serif]"
  >
    <RouterView />
    <Toast />
  </div>
</template>
