<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col s6 offset-s3">

          <!-- Logo Component -->
          <div class="logo center">
            <h3>Logo</h3>
          </div>

          <!-- Form Component -->
          <div class="row">
            <form class="col s12">

              <!-- input text -->
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
              <div class="input-component">
                <div class="input-field">
                  <select
                    id="input-voice" 
                    class="">
                    <template v-if="voices">
                      <option v-for="(voice, index) of voices"
                        :key="index" 
                        :value="index">{{voice.name}}</option>
                    </template>
                  </select>
                  <label>Voices</label>
                </div>
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

  </div>
</template>

<script>
import Materialize from "materialize-css/dist/js/materialize";

export default {
  name: "app",
  data() {
    return {
      synth: window.speechSynthesis,
      text: null,
      rate: 1,
      pitch: 1,
      voices: null
    };
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
  },
  updated() {
    Materialize.AutoInit();
  }
};
</script>

<style lang="scss">
.input-component {
  padding-bottom: 1.5rem;
}
</style>
