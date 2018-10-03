<template>
  <div class="input-textarea">
    <div class="input-field">
      <label v-if="label" :for="id">{{label}}</label>
      <textarea 
        class="materialize-textarea"
        v-bind:id="id"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)">
      </textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-textarea",
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: null
    },
    value: {
      default: null
    }
  }
};
</script>

<style scoped lang="scss"></style>