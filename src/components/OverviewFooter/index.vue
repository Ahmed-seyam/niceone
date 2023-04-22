<template>
  <div class="grid grid-cols-1 gap-[1rem]">
    <div
      class="bg-[var(--bluegray-50)] p-.6rem rounded-.5rem text-[var(--bluegray-500)] text-[.85rem]"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
      recusandae.
    </div>

    <footer>
      <ul class="flex flex-wrap text-.9rem color-[var(--blue-500)]">
        <li class="ltr:m-r-.8rem ltr:last:m-r-0">
          <router-link to="/profile/id">contact us</router-link>
        </li>

        <li class="ltr:m-r-.8rem ltr:last:m-r-0">
          <router-link to="/profile/id">home</router-link>
        </li>

        <li class="ltr:m-r-.8rem ltr:last:m-r-0">
          <router-link to="/profile/id">store</router-link>
        </li>

        <li class="ltr:m-r-.8rem ltr:last:m-r-0">
          <router-link to="/profile/id">policy</router-link>
        </li>

        <li class="ltr:m-r-.8rem ltr:last:m-r-0">
          <router-link to="/profile/id">terms&condtions</router-link>
        </li>
      </ul>

      <ul class="flex flex-wrap text-.9rem color-[var(--blue-500)]">
        <li class="ltr:m-r-.8rem ltr:last:m-r-0">
          <router-link to="/profile/id">orders</router-link>
        </li>

        <li class="ltr:m-r-.8rem ltr:last:m-r-0">
          <router-link to="/profile/id">returns</router-link>
        </li>

        <li class="ltr:m-r-.8rem ltr:last:m-r-0">
          <router-link to="/profile/id">information</router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>
