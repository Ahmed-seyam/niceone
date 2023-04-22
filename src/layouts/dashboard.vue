<template>
  <main
    class="w-[100%] min-h-[100vh] grid grid-cols-[18rem_1fr] overflow-visible bg-white"
  >
    <dashboard-navbar
      class="sticky top-0 col-[1/2] min-h-100vh h-min ltr:b-r-1 rtl:b-l-1"
    ></dashboard-navbar>

    <div class="content col-[2/3] row-[1/-1]">
      <router-view />
    </div>
  </main>
</template>
