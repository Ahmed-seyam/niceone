<script setup>
const visible = ref(false);
const open = () => {
  visible.value = true;
};
const value1 = ref(null);

defineExpose({
  open,
});
</script>

<template>
  <div class="card flex justify-content-center">
    <Sidebar
      v-model:visible="visible"
      class="w-full !overflow-y-scroll !md:w-20rem !lg:w-30rem relative !bg-[var(--bluegray-50)] grid grid-rows-[min-content_1fr]"
    >
      <h3
        class="absolute bg-white justify-start text-[1.3rem] p-x-[1.5rem] w-[100%] p-y-1rem z-[-1] left-0% top-[0] autogrid gap-3"
      >
        <div
          i-carbon:notification-filled
          class="color-[var(--yellow-500)] w-[1.3rem] h-1.3rem"
        ></div>
        الاشعارات
      </h3>

      <div
        class="result grid grid-cols-1 m-t-1rem !overflow-hidden m-b-2rem bg-white rounded-[2rem] basicshadow color-black"
      >
        <router-link
          v-for="i in 10"
          to="/products/1"
          class="product__in__list p-1rem !last:border-0 border-[var(--bluegray-100)] !border-b-2 bg-white grid gap-3 grid-cols-[max-content_1fr_max-content] grid-rows-1 overflow-hidden"
        >
          <img
            src="/images/users/image.png"
            class="col-[1/2] row-[1/2] w-[5rem] h-[5rem] p-.5rem bg-[var(--bluegray-50)] rounded-full"
            alt=""
          />

          <div>
            <h3 class="text-[1.2rem]">حالة الاوردر</h3>
            <p>تم استلام الاوردر</p>
          </div>

          <div
            class="autogrid text-[.7rem] items-center self-start color-[var(--bluegray-600)]"
          >
            <time class="">{{
              new Date(Date.now()).toLocaleString().split(",")[0]
            }}</time>
            <div i-carbon:time></div>
          </div>
        </router-link>
      </div>
    </Sidebar>
  </div>
</template>
