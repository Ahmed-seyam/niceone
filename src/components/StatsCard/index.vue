<script setup>
defineProps(["color"]);
</script>
<template>
  <div
    :class="`bg-[var(--${color}-50)]`"
    class="overview__card ltr:m-r-1rem m-b-1rem !last:m-x-0 rtl:m-r-1rem rounded-1rem p-2rem gap-x-1.5rem items-center grid grid-rows-[min-content_1fr] grid-cols-[3rem_6rem] w-fit"
  >
    <div class="row-[1/3]">
      <slot name="image" />
    </div>

    <h3
      class="text-1rem col-[2/3] row-[1/2] uppercase"
      :class="`color-[var(--${color}-800)]`"
    >
      <slot name="heading" />
    </h3>
    <p
      class="col-[2/3] row-[2/3] text-[1.7rem]"
      :class="`color-[var(--${color}-600)]`"
    >
      <slot name="value" />
    </p>
  </div>
</template>
