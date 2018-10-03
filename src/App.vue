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
              <!-- app-text -->
              <div class="input-component">
                <div class="input-field">
                  <label for="input-text">Type Anything...</label>
                  <textarea 
                    id="input-text" 
                    class="materialize-textarea"
                    v-model="text">
                  </textarea>
                </div>
              </div>

              <!-- input rate -->
              <!-- app-range -->
              <div class="input-component">
                <label for="input-rate">
                  <div>Rate<span class="right">{{rate}}</span></div>
                </label>
                <input 
                  id="input-rate" 
                  type="range" 
                  min="0.5"
                  max="2"
                  step="0.1"
                  v-model="rate">
              </div>

              <!-- input pitch -->
              <!-- app-range -->
              <div class="input-component">
                <label for="input-pitch">
                  <div>Pitch<span class="right">{{pitch}}</span></div>
                </label>
                <input 
                  id="input-pitch" 
                  type="range" 
                  min="0" 
                  max="2"
                  step="0.1"
                  v-model="pitch">
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

    <!-- <pre>{{text}}</pre>
    <pre>{{rate}}</pre>
    <pre>{{pitch}}</pre> -->
    <!-- <pre>{{synth.speaking}}</pre> -->
    <pre>{{voice}}</pre>

  </div>
</template>

<script>
import Materialize from "materialize-css/dist/js/materialize.min.js";
import InputSelect from "./components/InputSelect.vue";

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
    appSelect: InputSelect
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
