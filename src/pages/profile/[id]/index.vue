<template>
  <div class="grid grid-cols-[1fr_27rem] h-100%">
    <dashboard-overview-content
      class="content rtl:b-l-1 ltr:b-r-1"
    ></dashboard-overview-content>

    <div
      class="sticky top-0 col-[2/3] min-h-100vh p-2rem grid grid-cols-1 grid-rows-[min-content_min-content] content-between"
    >
      <notifications-summary></notifications-summary>

      <overview-footer></overview-footer>
    </div>
  </div>
</template>
