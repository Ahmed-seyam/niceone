<script>
export default {
  props: ["tags", "size", "behavior", "type", "initialValue"],
  emits: ["selectionUpdated"],
  setup(props, { emit }) {
    const selectedItems = ref(props.initialValue ?? []);

    watch(
      () => props.initialValue,
      () => {
        selectedItems.value = props.initialValue;
      }
    );

    const updateSelectedItems = (value) => {
      // this function is created to mutate the selceted items form a parent component
      // you can use the methods of child component from a parent component by the use of template refs
      selectedItems.value = value;
    };

    const selectItem = (itemName) => {
      const selectedItemIndex = selectedItems.value.findIndex(
        (item) => item === itemName
      );

      if (selectedItemIndex === -1) {
        if (props.behavior === "multi") selectedItems.value.push(itemName);
        else if (props.behavior === "single") selectedItems.value[0] = itemName;
      } else if (selectedItemIndex !== -1 && props.behavior === "multi") {
        selectedItems.value.splice(selectedItemIndex, 1);
      }

      emit("selectionUpdated", selectedItems.value);
    };

    const isSelectedItem = computed(() => (itemName) => {
      return selectedItems.value.includes(itemName);
    });

    // styling the shortcuts based on the usage
    let activeClasses;

    (() => {
      // if it was a color pallette we will change the background color based on the tag name
      if (props.type === "color") {
        activeClasses = {
          "product__color--item": true,
          "u-margin-right-tiny": true,
        };
      } else {
        // else we will create default shortcuts style
        activeClasses = {
          "shortcut--item": true,
          "shortcut--item-s": props.size === "s",
          "shortcut--item-m": props.size === "m",
        };
      }
    })();

    return {
      selectItem,
      selectedItems,
      isSelectedItem,
      updateSelectedItems,
      activeClasses,
    };
  },
};
</script>

<template>
  <ul class="product__color--list shortcut--list non__click">
    <li
      v-for="tag in tags"
      :key="tag"
      class="non__click w-[max-content] m-b-.8rem rtl:m-l-.8rem ltr:m-r-.8rem dark:bg-dark-tertiary/40 dark:color-grey-light-4 !dark:transition-0"
      :class="{
        ...activeClasses,
        active: !isDark && isSelectedItem(tag),
        ' dark:bg-gradient-to-b dark:from-dark-secondary-light dark:to-dark-secondary-dark !dark:color-white':
          isSelectedItem(tag),
      }"
      :style="{ 'background-color': type === 'color' ? tag : false }"
      @click="selectItem(tag)"
    >
      {{ type !== "color" ? tag : "" }}
    </li>
  </ul>
</template>
