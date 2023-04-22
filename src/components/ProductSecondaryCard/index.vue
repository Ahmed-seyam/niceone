<script setup>
defineProps(["type"]);
</script>

<template>
  <div
    class="product__in__list p-1rem grid gap-3 grid-cols-[max-content_1fr_max-content] grid-rows-2 rounded-[2rem] bg-white overflow-hidden basicshadow"
  >
    <img
      src="/images/products/image.png"
      class="col-[1/2] row-[1/3] w-[9rem] h-[9rem] p-.5rem bg-[var(--bluegray-50)] rounded-1rem"
      alt=""
    />

    <div
      class="details overflow-hidden col-[2/3] row-[1/3] grid gird-cols-1 !items-end grid-rows-[min-content_min-content_min-content_min-content_1fr_min-content]"
    >
      <span class="brand flex text-[.8rem]">Etude House</span>

      <router-link to="/products/1">
        <h3 class="text-[1rem]">كونسيلر خافي عيوب العين</h3>
      </router-link>

      <div v-if="type === 'cart'">الحجم 80 ملل</div>
      <div v-if="type === 'cart'">اللون الاحمر</div>

      <div
        class="relative row-[5/6] w-[fit-content] color-[var(--red-800)] font-bold"
      >
        <span
          class="absolute left-50% top-50% rotate-[-3deg] translate-x-[-40%] translate-y-[-150%] w-[80%] z-3 flex h-[1px] rounded-full bg-[var(--red-700)]"
        ></span>
        50 ريال
      </div>

      <div class="text-[1.1rem] row-[6/7]">
        <span class="font-[Jost,sans-serif] font-bold"> 43 </span>
        <span class="p-x-.1rem font-bold">ريال</span>
      </div>
    </div>

    <div
      class="col-[3/4] row-[1/3] !w-[5rem] flex flex-col !w-[min-content] !h-[100%] !justfiy-between"
    >
      <Button
        rounded
        severity="danger"
        text
        class="!p-.2rem !w-[2rem] !h-[2rem] !m-b-.7rem"
        outlined
      >
        <div
          i-carbon:delete
          class="color-[var(--red-800)] !w-[1.3rem] !h-[1.3rem] m-auto"
        ></div>
      </Button>

      <div
        class="flex relative flex-col justify-between items-end w-[2rem]"
        v-if="type === 'cart'"
      >
        <Button
          class="!p-.2rem !m-b-1.5rem z-3 !w-[100%] h-[2rem] flex items-center justify-center rounded-[1rem_1rem_0_0] bg-[var(--indigo-500)]"
          rounded
        >
          <div i-carbon:add></div>
        </Button>
        <input
          class="!w-[100%] text-[.8rem] absolute top-0 bottom-0 left-0 rounded-full border-2 !border-[var(--indigo-600)] text-center"
          type="text"
          value="3"
        />
        <Button
          class="!p-.2rem !w-[100%] h-[2rem] flex items-center justify-center rounded-[1rem_1rem_0_0] bg-[var(--indigo-500)]"
          rounded
        >
          <div i-carbon:subtract></div>
        </Button>
      </div>
    </div>
  </div>
</template>
