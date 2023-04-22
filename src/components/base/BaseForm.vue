<script>
import { reactive, ref } from 'vue'

export default {
  components: {},
  props: ['type', 'initialData'],
  emits: ['form-submitted', 'form-closed'],
  setup(props, { emit }) {
    const data = reactive({})

    const validateElement = (element) => {
      // make sure that the element exits and it is an input or a textarea
      return (
        element
        && element.tagName
        && ['input', 'textarea'].includes(element.tagName.toLowerCase())
      )
    }

    const filterUnchagedData = (data) => {
      if (!props.initialData)
        return data
      for (const prop in data) {
        if (data[prop] == props.initialData[prop])
          delete data[prop]
      }

      return data
    }

    const submitForm = async (e) => {
      if (loading.value)
        return
      e.preventDefault()
      for (const key in e.target.elements) {
        if (isNaN(key * 1))
          break
        if (!validateElement(e.target[key]))
          continue

        if (e.target[key].files && e.target[key].files.length > 0)
          data[e.target[key].name] = Array.from(e.target[key].files)
        else if (e.target[key].value !== '')
          data[e.target[key].name] = e.target[key].value
      }

      emit('form-submitted', filterUnchagedData(data))
    }

    const closeForm = () => {
      emit('form-closed')
    }

    const loading = ref(false)
    const setLoadingStatus = (value) => {
      if (typeof value !== 'boolean')
        return
      loading.value = value
    }

    return {
      data,
      submitForm,
      closeForm,
      loading,
      setLoadingStatus,
    }
  },
}
</script>

<template>
  <form class="!dark:bg-dark-primary" @submit="submitForm($event)">
    <slot name="content" :initial-data="initialData" />

    <slot name="controllers" :loading="loading">
      <div class="form__group">
        <button type="button" class="btn btn-small btn-red" @click="closeForm">
          close
        </button>
        <base-button
          type="submit"
          class="btn-small btn-blue"
          :inner-text="type === 'edit' ? 'edit' : 'publish'"
          :loading="loading"
          :disabled="loading"
        />
      </div>
    </slot>

    <slot name="formFooter" />
  </form>
</template>
