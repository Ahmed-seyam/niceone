<script setup>
import { availableLocales, loadLanguageAsync } from "~/modules/i18n";

const products = ref();
const menu = ref(false);

const { t, locale } = useI18n();
async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales;
  const newLocale =
    locales[(locales.indexOf(locale.value) + 1) % locales.length];

  await loadLanguageAsync(newLocale);
  locale.value = newLocale;
  if (locale.value === "ar") {
    document.getElementsByTagName("body")[0].setAttribute("dir", "rtl");
  } else {
    document.getElementsByTagName("body")[0].setAttribute("dir", "ltr");
  }
}

const toggleUserMenu = () => {
  console.log("HERE");
};

const megaMenu = ref(null);
const setMegaMenu = (val) => {
  megaMenu.value.setMegaMenu(val);
};

const cartSidebar = ref(null);
const wishlistSidebar = ref(null);
const notificationsSidebar = ref(null);
const searchSidebar = ref(null);

const openWishlist = () => {
  if (!wishlistSidebar.value) return;

  wishlistSidebar.value.open();
};

const openNotifications = () => {
  if (!notificationsSidebar.value) return;

  notificationsSidebar.value.open();
};

const openSearch = () => {
  if (!searchSidebar.value) return;

  searchSidebar.value.open();
};

const openCart = () => {
  if (!cartSidebar.value) return;

  cartSidebar.value.open();
};
</script>

<template>
  <nav
    class="shadow-[0_0_2rem_rgba(0,0,0,.1)] overflow-visible p-x-[3rem] grid grid-cols-[max-content_1fr_max-content] items-center gap-[3rem] justify-between"
  >
    <router-link
      to="/home"
      class="logo bg-grey-light-3 rounded-full h-[3.5rem]"
    >
      <Image
        src="/images/logo.png"
        alt="Image"
        imageClass="w-[100%] h-[100%] "
      />
    </router-link>

    <ul
      class="m-y-[1.3rem] text-[1.2rem] grid grid-flow-col items-center w-[fit-content] gap-[1rem] font-[600]"
    >
      <li
        class="relative"
        @mouseenter="setMegaMenu(true)"
        @mouseleave="setMegaMenu(false)"
        @click="setMegaMenu(true)"
      >
        <Button
          severity="primary"
          class="all_categories_button !bg-[var(--primary-600)] pointer font-bold grid grid-flow-col items-center gap-[1rem] !p-y-.5rem"
          rounded
        >
          <div i-carbon:apps></div>
          {{ t("nav.categories") }}
        </Button>

        <all-categories-menu ref="megaMenu"></all-categories-menu>
      </li>

      <li v-for="items in 4">
        <router-link :to="'/store/' + items">
          <Button
            severity="primary"
            class="pointer !color-[var(--primary-800)] font-bold grid grid-flow-col items-center !p-y-.2rem"
            rounded
            outlined
            text
          >
            عطور
          </Button>
        </router-link>
      </li>
    </ul>

    <div class="autogrid !gap-[2rem]">
      <div class="autogrid !gap-[.7rem]">
        <div>
          <Button
            severity="warning"
            @click="openNotifications"
            text
            class="!w-2rem !h-2rem !p-0 flex justify-center items-center"
          >
            <div
              i-carbon:notification-filled
              class="color-[var(--yellow-400)]"
            ></div>
          </Button>
        </div>
        <div>
          <Button
            severity="primary"
            @click="openCart"
            text
            class="!w-2rem !h-2rem !p-0 flex justify-center items-center"
          >
            <div i-carbon:shopping-cart class="color-[var(--blue-600)]"></div>
          </Button>
        </div>
        <div>
          <Button
            severity="danger"
            @click="openWishlist"
            text
            class="!w-2rem !h-2rem !p-0 flex justify-center items-center"
          >
            <div i-carbon:favorite-filled class="color-[var(--red-600)]"></div>
          </Button>
        </div>

        <div>
          <Button
            severity="secondary"
            @click="openSearch"
            text
            class="!w-2rem !h-2rem !p-0 flex justify-center items-center"
          >
            <div i-carbon:search class="color-[var(--bluegray-600)]"></div>
          </Button>
        </div>

        <div>
          <Button
            severity="secondary"
            @click="toggleLocales"
            text
            class="!w-2rem !h-2rem !p-0 flex justify-center items-center"
          >
            <a icon-btn :title="t('button.toggle_langs')">
              <div i-carbon-language />
            </a>
          </Button>
        </div>

        <!-- <Button
          icon-btn
          @click="toggleDark()"
          severity="secondary"
          outlined=""
          rounded
          class="w-[3rem] h-[3rem] !p-0 flex item-center justify-center"
        >
          <div i="carbon-sun dark:carbon-moon" />
        </Button> -->
      </div>

      <div class="autogrid" v-if="false">
        <router-link to="/">
          <Button severity="primary" class="pointer font-bold" rounded>
            {{ t("nav.login") }}
          </Button>
        </router-link>
        <router-link to="/">
          <Button severity="primary" class="pointer font-bold" rounded outlined>
            {{ t("nav.register") }}
          </Button>
        </router-link>
      </div>

      <Button
        v-else
        severity="primary"
        class="autogrid !p-y-.5rem !bg-[var(--primary-600)]"
        rounded
        @click="$router.push('/profile/id')"
      >
        <Image
          src="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"
          class="rounded-[50%] overflow-hidden w-[1.8rem] h-[1.8rem]"
        />

        {{ t("nav.account") }}
      </Button>
    </div>

    <MountedTeleport to="body">
      <cart ref="cartSidebar" />
      <wishlist ref="wishlistSidebar" />
      <notifications ref="notificationsSidebar" />
      <search ref="searchSidebar" />
    </MountedTeleport>
  </nav>
</template>
