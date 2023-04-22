<script>
export default {
  props: ['values', 'style', 'selected', 'error', 'disableSelection'],
  emits: ['value-updated'],
  setup(props, { emit }) {
    const visible = ref(false)
    const selectbox = ref(null)

    const close = () => {
      visible.value = false
    }

    const open = () => {
      visible.value = true
    }

    // TOGGLE THE MENU FUCNTION
    const toggle = () => {
      window.addEventListener('click', (e) => {
        if (!selectbox.value)
          return
        if (!selectbox.value.contains(e.target) && visible.value)
          close()
      })

      visible.value = !visible.value
    }

    // SELECTION HANDLERS
    const selectionValue = ref(props.selected || '')

    watch(() => props.selected, (value) => {
      if (value === '')
        selectionValue.value = ''

      else selectionValue.value = value
    })

    // -) SECLECTION UPDATE FUNCTION
    const updateValue = (value) => {
      if (selectionValue.value === value || props.disableSelection)
        return

      selectionValue.value = value
      emit('value-updated', value)
    }

    // -) SELECTION RESET FUNCTION
    const resetSelection = () => {
      selectionValue.value = ''
    }

    return {
      visible,
      updateValue,
      selectionValue,
      toggle,
      close,
      open,
      resetSelection,
      selectbox,
    }
  },
}
</script>

<template>
  <div>
    <div
      ref="selectbox"
      class="select__box dark:bg-dark-quadratic "
      :class="{ 'select__box--2': style === 'style2' }"
      @click="toggle()"
    >
      <div class="select__box__value dark:color-grey-light-4">
        <span>{{ selectionValue !== '' ? selectionValue : "select" }} </span>
        <svg class="select__box__arrow">
          <use xlink:href="/images/sprite.svg#icon-chevron-right" />
        </svg>
      </div>

      <transition name="slide" mode="in-out">
        <ul v-if="visible" class="select__box__options !dark:shadow-none">
          <li
            v-for="value in values"
            :key="value"
            class="select__box__option"
            @click="updateValue(value)"
          >
            {{ value }}
          </li>
        </ul>
      </transition>
    </div>

    <span v-if="error && error[0]" class="error__message">
      {{ error[1] }}
    </span>
  </div>
</template>
