<script setup>
const value = ref("1001527992");

const pass = ref(null);
</script>
<template>
  <div class="p-[0_2rem_2rem_2rem] grid grid-cols-2 gap-2rem">
    <div
      class="grid col-[1/3] grid-cols-1 gap-1rem overflow-hidden bg-gray-50 rounded-[0_0_1rem_1rem]"
    >
      <div
        class="bg-[var(--blue-600)] bg-gradient-to-b from-[var(--blue-300)] to-[var(--blue-500)] rounded-[0_0_3rem_3rem] w-[100%] h-8rem"
      ></div>

      <img
        src="/images/users/image.png"
        class="w-8rem !h-[8rem] border-4 border-[white] bg-[var(--bluegray-50)] rounded-full m-x-auto m-t-[-5rem]"
        alt=""
      />

      <h2 class="m-auto text-[1.4rem] font-bold color-[var(--bluegray-900)]">
        Ahmed Seyam
      </h2>

      <ul class="p-x-2rem p-b-2rem grid gap-.7rem">
        <li class="autogrid w-fit color-[var(--bluegray-900)]">
          <div i-carbon:email class="color-[var(--red-600)]"></div>
          ahmedseyam@yahoo.com
        </li>

        <li class="autogrid w-fit color-[var(--bluegray-900)]">
          <div i-carbon:phone class="color-[var(--purple-700)]"></div>
          01001527992
        </li>

        <li class="autogrid w-fit color-[var(--bluegray-900)]">
          <div i-carbon:location class="color-[var(--green-700)]"></div>
          Egypt, Cairo, heliopolis, 22 Street
        </li>
      </ul>
    </div>

    <div class="grid gap-2rem p-2rem rounded-2rem bg-gray-50">
      <h2
        class="autogrid w-fit text-1.2rem gap-[1.2rem] font-bold uppercase color-[var(--bluegray-800)]"
      >
        <div i-carbon:user-data class="color-[var(--blue-500)]"></div>
        user information
      </h2>

      <div class="grid gap-1rem">
        <form class="grid grid-cols-[6rem_1fr_max-content] items-center">
          <label for="" class="m-r-1rem capitalize">name</label>
          <input
            type="text"
            name=""
            value="Ahmed"
            class="h-100% outline-none !rounded-[.5rem_0_0_.5rem] border-1 p-x-.5rem color-[var(--bluegray-700)]"
          />
          <Button severity="" class="!rounded-[0_.5rem_.5rem_0]">update</Button>
        </form>

        <form class="grid grid-cols-[6rem_1fr_max-content] items-center">
          <label for="" class="m-r-1rem capitalize">email</label>
          <input
            type="email"
            name=""
            value="ahmedseyam@yahoo.com"
            class="h-100% outline-none !rounded-[.5rem_0_0_.5rem] border-1 p-x-.5rem color-[var(--bluegray-700)]"
          />
          <Button severity="" class="!rounded-[0_.5rem_.5rem_0]">update</Button>
        </form>

        <form class="grid grid-cols-[6rem_1fr_max-content] items-center">
          <label for="" class="m-r-1rem capitalize">phone</label>

          <InputMask
            v-model="value"
            date="phone"
            mask="(999) 999-9999"
            placeholder="(999) 999-9999"
            class="h-100% outline-none !rounded-[.5rem_0_0_.5rem] border-1 p-x-.5rem color-[var(--bluegray-700)]"
          />

          <Button severity="" class="!rounded-[0_.5rem_.5rem_0]">update</Button>
        </form>
      </div>
    </div>

    <div class="grid gap-2rem p-2rem rounded-2rem bg-gray-50">
      <h2
        class="autogrid w-fit text-1.2rem gap-[1.2rem] font-bold uppercase color-[var(--bluegray-800)]"
      >
        <div i-carbon:locked class="color-[var(--red-500)]"></div>
        user information
      </h2>

      <div class="grid gap-1rem">
        <form class="grid grid-cols-[8rem_1fr] gap-1rem items-center">
          <label for="" class="m-r-1rem capitalize">old password</label>

          <Password
            v-model="pass"
            :feedback="false"
            class="!w-[100%] !h-3.2rem outline-none !rounded-[.5rem_0_0_.5rem] border-1 color-[var(--bluegray-700)]"
          />

          <label for="" class="m-r-1rem capitalize">new password</label>

          <Password
            :feedback="false"
            toggleMask
            v-model="pass"
            class="!w-[100%] !h-3.2rem outline-none !rounded-[.5rem_0_0_.5rem] border-1 color-[var(--bluegray-700)]"
          />

          <Button
            severity=""
            class="col-[2/3] w-fit ltr:m-l-auto !p-x-2rem !rounded-full rtl-m-r-auto !m-t-1rem"
            >save</Button
          >
        </form>
      </div>
    </div>
  </div>
</template>
