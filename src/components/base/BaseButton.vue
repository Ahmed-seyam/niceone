<script>
import { ref } from 'vue'
export default {
  props: ['innerText', 'loading', 'active', 'loadingType'],
  setup(props) {
    const button = ref(null)
    const text = ref(props.innerText)

    return {
      text,
      button,
    }
  },
}
</script>

<template>
  <button
    ref="button"
    type="button"
    class="btn"
    :class="{
      btn__loading: loading,
      btn__active: active,
    }"
  >
    <slot v-if="!loading" name="content" :text="text">
      {{ innerText }}
    </slot>

    <slot v-if="loading" name="loading">
      <div
        v-if="loadingType == 'inline'"
        class="loading__content loading__content--small"
      >
        <div class="lds-dual-ring" />
      </div>
      <div v-else class="loading__content">
        <div class="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </slot>
  </button>
</template>
