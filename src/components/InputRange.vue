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

<style scoped lang="scss">
// color palette
$color1: #d75c37;
$color2: #67727a;
$color3: #6991ac;
$color4: #c3d7df;
$color5: #f5f5f5;
$color6: darken($color2, 30);

// style
@mixin range-track {
  background: $color2;
  border: none;
}

input[type="range"] {
  border: transparent !important;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: $color1;
}

input[type="range"]::-moz-range-thumb {
  background: $color1;
}

input[type="range"]::-ms-thumb {
  background: $color1;
}

input[type="range"]::-webkit-slider-runnable-track {
  @include range-track;
}

input[type="range"] {
  border: 1px solid $color2;
}

input[type="range"]::-moz-range-track {
  @include range-track;
}

input[type="range"]:-moz-focusring {
  outline: 1px solid $color2;
  outline-offset: -1px;
}

input[type="range"]::-ms-fill-lower {
  background: $color2;
}

input[type="range"]::-ms-fill-upper {
  background: $color2;
}
</style>