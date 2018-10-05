<template>
  <div id="app">
    <div class="wrapper">

      <!-- Logo Component -->
      <header><app-logo></app-logo></header>

      <!-- Form Component -->
      <form>
        <div class="row">
          <div class="col s12">
            <div class="input-component">
              <app-textarea
                id="input-text"
                label="Type Something..."
                v-model="text">
              </app-textarea>
            </div>
          </div>            
          <div class="col s6">
            <div class="input-component">
              <app-range
                label="Rate"
                min="0.5"
                max="2"
                step="0.1"
                v-model="rate">
              </app-range>
            </div>
          </div>
          <div class="col s6">
            <div class="input-component">
              <app-range
                label="Pitch"
                min="0"
                max="2"
                step="0.1"
                v-model="pitch">
              </app-range>
            </div>
          </div>
          <div class="col s12">
            <div class="input-component">
              <template v-if="voices">
                <app-select 
                  label="Voices"
                  v-model="voice" 
                  :options="voices">
                </app-select>
              </template>
            </div>
          </div>
          <div class="col s12">
            <div class="center">
              <button 
                class="waves-effect waves-light btn btn-large"
                v-on:click.prevent="speak">
                Speak!
              </button>
            </div>
          </div>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
import Materialize from "materialize-css/dist/js/materialize.min.js";
import InputTextarea from "./components/InputTextarea.vue";
import InputSelect from "./components/InputSelect.vue";
import InputRange from "./components/InputRange.vue";
import Logo from "./components/Logo.vue";

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
    appRange: InputRange,
    appLogo: Logo
  },
  methods: {
    getVoices() {
      this.voices = this.synth.getVoices();
    },
    speak() {
      if (this.text && this.voice) {
        if (this.synth.speaking) {
          return;
        } else {
          let speech = new SpeechSynthesisUtterance(this.text);
          speech.rate = this.rate;
          speech.pitch = this.pitch;
          speech.voice = null;
          this.voices.forEach(voice => {
            if (this.voice === voice.name) {
              speech.voice = voice;
            }
          });
          this.synth.speak(speech);
        }
      }
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
// color palette
$color1: #d75c37;
$color2: #67727a;
$color3: #6991ac;
$color4: #c3d7df;
$color5: #f5f5f5;
$color6: darken($color2, 30);

// style
body {
  height: 100vh;
  background-color: $color6;
}

.wrapper {
  max-width: 640px;
  width: 60%;
  padding: 0.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
}

header {
  text-align: center;
  margin-bottom: 2rem;
}

.input-component {
  padding-bottom: 1.5rem;
}

@media only screen and (min-width: 300px) and (max-width: 499px) {
  .wrapper {
    min-width: 100%;
    width: 100%;
  }
}

@media only screen and (min-width: 500px) and (max-width: 699px) {
  .wrapper {
    min-width: 100%;
    width: 100%;
    padding: 0 4rem;
  }
}
</style>
