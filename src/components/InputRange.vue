<template>
  <div class="input-range">
    <label v-if="label">
      <div>{{label}}<span class="right">{{value}}</span></div>
    </label>
    <input
      type="range" 
      v-bind:min="min"
      v-bind:max="max"
      v-bind:step="step"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: "input-range",
  props: {
    label: {
      type: String,
      default: null
    },
    min: {
      default: 0,
      required: true
    },
    max: {
      default: 10,
      required: true
    },
    step: {
      default: 1,
      required: true
    },
    value: {
      default: 5,
      required: true
    }
  }
};
</script>

<style scoped lang="scss"></style>