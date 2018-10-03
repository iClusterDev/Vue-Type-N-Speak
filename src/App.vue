<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col s6 offset-s3">

          <!-- Logo Component -->
          <!-- app-logo -->
          <div class="logo center">
            <h3>Logo</h3>
          </div>

          <!-- Form Component -->
          <div class="row">
            <form class="col s12">

              <!-- input text -->
              <!-- app-textarea -->
              <div class="input-component">
                <app-textarea
                  id="input-text"
                  label="Type Something..."
                  v-model="text">
                </app-textarea>
              </div>

              <!-- input rate -->
              <!-- app-range -->
              <div class="input-component">
                <app-range
                  label="Rate"
                  min="0.5"
                  max="2"
                  step="0.1"
                  v-model="rate">
                </app-range>
              </div>

              <!-- input pitch -->
              <!-- app-range -->
              <div class="input-component">
                <app-range
                  label="Pitch"
                  min="0"
                  max="2"
                  step="0.1"
                  v-model="pitch">
                </app-range>
              </div>

              <!-- input voice -->
              <!-- app-select -->
              <div class="input-component">
                <template v-if="voices">
                  <app-select 
                    v-model="voice" 
                    :options="voices"
                    label="Voices">
                  </app-select>
                </template>
              </div>

              <!-- speak button -->
              <div class="center">
                <button class="waves-effect waves-light btn">Say It</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>

    <!-- check -->
    <pre>{{voice}}</pre>
    <pre>{{rate}}</pre>
    <pre>{{pitch}}</pre>
    <pre>{{text}}</pre>

  </div>
</template>

<script>
import Materialize from "materialize-css/dist/js/materialize.min.js";
import InputTextarea from "./components/InputTextarea.vue";
import InputSelect from "./components/InputSelect.vue";
import InputRange from "./components/InputRange.vue";

export default {
  name: "app",
  data() {
    return {
      synth: window.speechSynthesis,
      text: null,
      rate: 1,
      pitch: 1,
      voice: null,
      voices: null
    };
  },
  components: {
    appTextarea: InputTextarea,
    appSelect: InputSelect,
    appRange: InputRange
  },
  methods: {
    getVoices() {
      this.voices = this.synth.getVoices();
    }
  },
  mounted() {
    this.getVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = this.getVoices;
    }
  }
};
</script>

<style lang="scss">
.input-component {
  padding-bottom: 1.5rem;
}
</style>
