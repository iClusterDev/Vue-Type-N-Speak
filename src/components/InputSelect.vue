<template>
  <div class="input-select">
    <div class="input-field">
      <select
        class="browser-default" 
        v-on:input="$emit('input', $event.target.value)">
        <option disabled selected value="">Please select one</option>
        <template v-if="options">
          <option v-for="(option, index) of options"
            v-bind:key="index"
            v-bind:value="option.name">
            {{option.name}}
          </option>
        </template>
      </select>
      <label v-if="label">{{label}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-select",
  props: {
    label: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped lang="scss">
select {
  border: none;
  border-radius: 0;
  border-bottom: solid 1px #9e9e9e;
  padding: 0;
}

select:focus {
  outline: none;
  border-bottom: solid 1px #009688;
}

select option:disabled {
  color: #9e9e9e;
}

label {
  margin-top: -24px;
  font-size: 0.8rem !important;
}
</style>