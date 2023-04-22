<template>
  <div
    class="grid grid-cols-1 gap-[2rem] justify-between grid-rows-[max-content_min-content]"
  >
    <h2
      class="col-[1/2] row-[1/2] font-bold capitalize text-1.2rem autogrid w-fit color-[var(--gray-700)]"
    >
      <div i-carbon:notification-filled class="color-yellow"></div>
      Recent notifications
    </h2>

    <div class="content grid grid-cols-1 gap-[1.5rem]">
      <router-link
        to="/products/1"
        class="product__in__list bg-white grid gap-3 grid-cols-[max-content_1fr_max-content] grid-rows-1 overflow-hidden"
      >
        <div
          class="col-[1/2] row-[1/2] w-[3rem] h-[3rem] text-[1.5rem] color-[var(--orange-300)] bg-[var(--orange-50)] flex justify-center items-center rounded-full p-.5rem"
        >
          <div i-carbon:trophy-filled></div>
        </div>

        <div>
          <h3 class="text-[1rem]">المرتبة الخاصة بك</h3>
          <p class="text-[.8rem] color-[var(--orange-800)]">
            لقد اصبحت عميل مهم معنا
          </p>
        </div>

        <div
          class="autogrid text-.75rem items-center self-start color-[var(--bluegray-600)]"
        >
          <time>{{ new Date(Date.now()).toLocaleString().split(",")[0] }}</time>
          <div i-carbon:time></div>
        </div>
      </router-link>

      <router-link
        to="/products/1"
        class="product__in__list bg-white grid gap-3 grid-cols-[max-content_1fr_max-content] grid-rows-1 overflow-hidden"
      >
        <div
          class="col-[1/2] row-[1/2] w-[3rem] h-[3rem] text-[1.5rem] color-[var(--green-300)] bg-[var(--green-50)] flex justify-center items-center rounded-full p-.5rem"
        >
          <div i-carbon:ai-status-complete></div>
        </div>

        <div>
          <h3 class="text-[1rem]">حالة الاوردر</h3>
          <p class="text-[.8rem] color-[var(--green-800)]">تم استلام الاوردر</p>
        </div>

        <div
          class="autogrid text-.7rem items-center self-start color-[var(--bluegray-600)]"
        >
          <time class="">{{
            new Date(Date.now()).toLocaleString().split(",")[0]
          }}</time>
          <div i-carbon:time></div>
        </div>
      </router-link>
    </div>
  </div>
</template>
