<script>
export default {
  name: 'MountedTeleport',
  props: ['to'],
  data() {
    return { isMounted: false }
  },
  mounted() {
    this.isMounted = true
  },
}
</script>

<template>
  <Teleport v-if="isMounted" :to="to">
    <slot />
  </Teleport>
</template>
