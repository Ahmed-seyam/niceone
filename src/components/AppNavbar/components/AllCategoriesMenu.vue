<script setup>
const { t, locale } = useI18n();

const megaMenu = ref(false);
const setMegaMenu = (value) => {
  megaMenu.value = value;
  if (!value) {
    firstScopeChildren.value = [];
    secondScopeChildren.value = [];
    firstSopeParent.value = "";
    secondSopeParent.value = "";
  }
};

const categories = ref([
  {
    id: "1",
    title: "perfume",
    image: "Asset 31.svg",
    categories: [
      {
        id: "4",
        title: "sub category 1",
        image: "Asset 35.svg",
        categories: [],
        root: false,
      },
      {
        id: "5",
        title: "sub category 2",
        image: "Asset 36.svg",
        categories: [],
        root: false,
      },
    ],
    root: true,
  },

  {
    id: "2",
    title: "hand clean",
    image: "Asset 32.svg",

    categories: [
      {
        id: "6",
        title: "sub cat 1",
        image: "Asset 32.svg",
        categories: [],
        root: false,
      },
      {
        id: "7",
        title: "sub cat 2",
        image: "Asset 32.svg",
        categories: [],
        root: false,
      },
    ],
    root: true,
  },

  {
    id: "3",
    title: "face clean",
    image: "Asset 33.svg",

    categories: [
      {
        id: "8",
        title: "sub cat 1",
        image: "Asset 35.svg",
        categories: [],

        root: false,
      },
      {
        id: "9",
        title: "sub cat 2",
        image: "Asset 36.svg",
        categories: [
          {
            id: "10",
            title: "sub cat 1",
            image: "Asset 37.svg",
            categories: [
              {
                id: "11",
                title: "sub cat 1",
                image: "Asset 38.svg",
                categories: [],
                root: false,
              },
            ],
            root: false,
          },
        ],
        root: false,
      },
    ],
    root: true,
  },

  {
    id: "11",
    title: "makeup",
    image: "Asset 34.svg",
    categories: [],
    root: true,
  },
]);

const firstScopeChildren = ref([]);
const firstSopeParent = ref("");
const secondSopeParent = ref("");
const secondScopeChildren = ref([]);

const updateFirstScope = (category) => {
  firstScopeChildren.value = category.categories;
  firstSopeParent.value = category.title;
  secondSopeParent.value = "";
  secondScopeChildren.value = [];
};

const updateSecondScope = (category) => {
  secondScopeChildren.value = category.categories;
  secondSopeParent.value = category.title;
};

defineExpose({
  setMegaMenu,
});
</script>

<template>
  <Transition name="fade">
    <div
      v-show="megaMenu"
      class="overflow-hidden text-[1rem] z-9 mega__menu autogrid gap-[0] !items-start rtl:right-0 ltr:left:0 bg-white rounded-[1.5rem] shadow-[0rem_0rem_2rem_rgba(0,0,0,.05)]"
    >
      <!-- Root List -->
      <ul class="p-[2rem_1rem] w-[15rem]">
        <router-link
          :to="'/store/' + category.title"
          @mouseover="updateFirstScope(category)"
          v-for="category in categories"
        >
          <div
            :class="{
              '!bg-[var(--gray-100)] ': category.title === firstSopeParent,
            }"
            class="transition !m-b-[.5rem] grid items-center gap-2 grid-cols-[max-content_max-content_1fr] color-grey-dark-6 p-[.8rem] rounded-1rem"
          >
            <img
              :src="'/images/categories/SVG/' + category.image"
              class="w-[2rem] h-2rem"
              alt=""
            />

            <span>
              {{ category.title }}
            </span>

            <div
              i-carbon:chevron-left
              class="rtl:m-r-auto ltr:m-l-auto ltr:rotate-180"
              v-if="category.categories.length > 0"
            ></div>
          </div>
        </router-link>
      </ul>

      <!-- Children -->
      <ul
        v-if="firstScopeChildren.length > 0"
        class="p-[2rem_1rem] h-[100%] w-[15rem]"
      >
        <li
          @mouseover="updateSecondScope(child)"
          v-for="child in firstScopeChildren"
        >
          <router-link :to="'/store/' + child.title">
            <div
              :class="{
                '!bg-[var(--gray-100)] ': child.title === secondSopeParent,
              }"
              class="transition !m-b-[.5rem] grid items-center gap-2 grid-cols-[max-content_max-content_1fr] color-grey-dark-6 p-[.8rem] rounded-1rem"
            >
              <img
                :src="'/images/categories/SVG/' + child.image"
                class="w-[2rem] h-2rem"
                alt=""
              />
              {{ child.title }}

              <div
                i-carbon:chevron-left
                class="rtl:m-r-auto ltr:m-l-auto ltr:rotate-180"
                v-if="child.categories.length > 0"
              ></div>
            </div>
          </router-link>
        </li>
      </ul>

      <!-- Children of Children-->
      <ul
        v-if="secondScopeChildren.length > 0"
        class="h-[100%] p-[2rem_1rem] w-[15rem]"
      >
        <li v-for="child in secondScopeChildren">
          <router-link :to="'/store/' + child.title" tag="li">
            <div
              class="transition hover:bg-[var(--gray-100)] !m-b-[.5rem] min-w-[13rem] justify-start autogrid w-[max-content_1fr] color-grey-dark-6 p-[.8rem] rounded-1rem"
            >
              <img
                :src="'/images/categories/SVG/' + child.image"
                class="w-[2rem] h-2rem"
                alt=""
              />
              {{ child.title }}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </Transition>
</template>
