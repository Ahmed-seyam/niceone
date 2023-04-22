<template>
  <main
    class="bg-grey-light-1 w-[100%] min-h-[100vh] relative color-[var(--bluegray-900)]"
  >
    <app-navbar class="bg-white"></app-navbar>
    <div id="sidebar"></div>
    <router-view />
    <app-footer></app-footer>
  </main>
</template>
