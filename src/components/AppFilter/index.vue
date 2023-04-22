<script setup>
const visible = ref(false);

const openFilter = () => {
  visible.value = true;
};

defineExpose({
  openFilter,
});
</script>
<template>
  <Transition name="slide-up">
    <div
      class="filter overflow-y-scroll bg-white basicshadow rounded-[4rem_0_0] fixed right-0 bottom-0 h-[calc(100vh-7rem)] w-28rem z-20"
      v-if="visible"
    >
      <div
        class="bg-white sticky top-0 p-y-3rem !w-[100%] !h-[2rem] flex items-center z-[9] p-x-[1rem]"
      >
        <button
          @click="visible = false"
          class="ltr:m-l-auto pointer color-red !w-[2rem] !h-[2rem]"
          i-carbon:close
        ></button>
      </div>

      <div class="content p-x-[2rem]">
        <section class="" v-for="i in 5">
          <div class="autogrid justify-between">
            <h5 class="autogrid w-fit">
              <div i-carbon:list></div>
              البرندات
            </h5>

            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                placeholder="Search"
                class="!rounded-full !p-y-.3rem"
              />
            </span>
          </div>

          <div class="values p-y-2rem">
            <shortcuts-component
              :behavior="'multi'"
              :tags="[
                'براند',
                'براند 2',
                '3 براند',
                'براند 4',
                '5 براند',
                'براند 6',
                '8 براند',
                '10 براند',
              ]"
            ></shortcuts-component>
          </div>
        </section>
      </div>

      <div
        class="sticky bottom-1rem p-.8rem autogrid bg-white m-[1rem_2rem] rounded-full basicshadow"
      >
        <Button class="!p-[.4rem_.5rem]" severity="primary" rounded>
          <span class="w-full text-center"> apply</span>
        </Button>
        <Button class="!p-[.4rem_.5rem]" severity="secondary" rounded>
          <span class="w-full text-center"> reset</span>
        </Button>
      </div>
    </div>
  </Transition>
</template>
