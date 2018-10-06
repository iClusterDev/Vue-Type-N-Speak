<template>
  <div class="input-textarea">
    <div class="input-field">
      <label v-if="label" :for="id">{{label}}</label>
      <textarea 
        class="materialize-textarea"
        v-bind:id="id"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        spellcheck="false">
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

<style scoped lang="scss">
// color palette
$color1: #d75c37;
$color2: #67727a;
$color3: #6991ac;
$color4: #c3d7df;
$color5: #f5f5f5;
$color6: darken($color2, 30);

// style
textarea {
  color: $color5;
}

.input-field textarea:focus {
  border-bottom: 1px solid $color1 !important;
  box-shadow: none !important;
}
</style>