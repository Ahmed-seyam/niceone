<template>
  <main
    class="grid grid-cols-1 grid-rows-[max-content_1fr_max-content] justify-items-center p-2rem"
  >
    <router-link to="/home">
      <img src="/images/logo.png" alt="" class="logo h-6rem max-w-10rem" />
    </router-link>
    <nav
      class="grid gird-cols-1 gap-[1rem] w-[100%] items-center content-center"
    >
      <router-link to="/profile/id">
        <div
          class="transition autogrid h-fit w-[100%] gap-[1.5rem] justify-start hover:color-[var(--bluegray-900)] hover:bg-[var(--bluegray-50)] color-grey-light-5 p-[1rem_1.5rem] rounded-1rem"
        >
          <div i-carbon:dashboard></div>

          overview
        </div>
      </router-link>

      <router-link to="/profile/id/orders">
        <div
          class="transition autogrid h-fit w-[100%] gap-[1.5rem] justify-start hover:color-[var(--gray-600)] hover:bg-[var(--gray-50)] color-grey-light-5 p-[1rem_1.5rem] rounded-1rem"
        >
          <div i-carbon:shopping-bag></div>

          orders
        </div>
      </router-link>

      <router-link to="/profile/id/privacy">
        <div
          class="transition autogrid h-fit w-[100%] gap-[1.5rem] justify-start hover:color-[var(--gray-600)] hover:bg-[var(--gray-50)] color-grey-light-5 p-[1rem_1.5rem] rounded-1rem"
        >
          <div i-carbon:identification></div>

          privacy
        </div>
      </router-link>

      <router-link to="/profile/id/returns">
        <div
          class="transition autogrid h-fit w-[100%] gap-[1.5rem] justify-start hover:color-[var(--gray-600)] hover:bg-[var(--gray-50)] color-grey-light-5 p-[1rem_1.5rem] rounded-1rem"
        >
          <div i-carbon:direction-u-turn></div>

          returns
        </div>
      </router-link>

      <button>
        <div
          class="transition autogrid h-fit w-[100%] gap-[1.5rem] justify-start hover:color-[var(--gray-600)] hover:bg-[var(--gray-50)] color-grey-light-5 p-[1rem_1.5rem] rounded-1rem"
        >
          <div i-carbon:logout></div>

          logout
        </div>
      </button>
    </nav>

    <footer>
      <img
        src="/images/ecommerce/SVG/Asset 13.svg"
        alt="sidebar_image"
        class="h-9rem w-min"
      />
    </footer>
  </main>
</template>

<style lang="scss" scoped>
.router-link-active {
  & > div {
    background-color: var(--blue-50) !important;
    color: var(--blue-700) !important;
    font-weight: bold !important;
  }
}
</style>
