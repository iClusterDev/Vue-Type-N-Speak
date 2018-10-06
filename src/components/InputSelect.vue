<template>
  <div class="input-select">
    <div class="input-field">
      <select        
        v-bind:value="value"
        v-on:change="$emit('input', $event.target.value)">
        <option disabled selected value="">Please select one</option>
        <template v-if="options">
          <option 
            v-for="(option, index) of options"
            v-init="{key: index, array: options, callback: mInit}"
            v-bind:key="index"
            v-bind:value="option.name">{{option.name}}
          </option>
        </template>
      </select>
      <label v-if="label">{{label}}</label>
    </div>
  </div>
</template>

<script>
import Materialize from "materialize-css/dist/js/materialize.min.js";

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
  },
  directives: {
    init(el, binding) {
      let key = binding.value.key;
      let length = binding.value.array.length;
      if (key == length - 1) {
        if (typeof binding.value.callback === "function") {
          binding.value.callback();
        }
      }
    }
  },
  methods: {
    mInit() {
      var el = document.querySelector("select");
      var instance = Materialize.FormSelect.init(el, {});
    }
  },
  mounted() {
    this.mInit();
  },
  updated() {
    this.mInit();
  }
};

/*
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelector("select");
  var instances = Materialize.FormSelect.init(elems, {});
});
*/

/*
forCallback(el, binding) {
  let element = binding.value;
  var key = element.key;
  var len = 0;

  if (Array.isArray(element.array)) {
    len = element.array.length;
  } else if (typeof element.array === "object") {
    var keys = Object.keys(element.array);
    key = keys.indexOf(key);
    len = keys.length;
  }

  if (key == len - 1) {
    if (typeof element.callback === "function") {
      element.callback();
    }
  }
}
 */
</script>

<style scoped lang="scss"></style>