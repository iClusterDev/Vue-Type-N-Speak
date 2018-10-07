<template>
  <div id="app">
    <div class="wrapper">

      <!-- Logo Component -->
      <header><app-logo></app-logo></header>

      <form>
        <!-- input text -->
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
          <!-- rate -->
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
          <!-- pitch -->
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
          <!-- volume -->
          <div class="col s12">
            <div class="input-component">
              <app-range
                label="Volume"
                min="0"
                max="1"
                step="0.1"
                v-model="volume">
              </app-range>
            </div>
          </div>
          <!-- select languages -->
          <div class="col s12">
            <div class="input-component">
              <template v-if="languages">
                <app-select
                  id="languages"
                  label="Language"
                  v-model="language" 
                  :options="languages">
                </app-select>
              </template>
            </div>
          </div>
          <!-- submit -->
          <div class="col s12">
            <div class="submit-component center">
              <button 
                class="waves-effect waves-light btn"
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
      synthVoices: null,
      text: null,
      rate: 1,
      pitch: 1,
      volume: 0.5,
      language: null
    };
  },
  computed: {
    languages() {
      if (this.synthVoices) {
        return [...new Set(this.synthVoices.map(voice => voice.lang))];
      } else {
        return null;
      }
    }
  },
  components: {
    appTextarea: InputTextarea,
    appSelect: InputSelect,
    appRange: InputRange,
    appLogo: Logo
  },
  methods: {
    getVoices() {
      return new Promise(resolve => {
        let voices = this.synth.getVoices();
        if (voices.length) {
          resolve(voices);
          return;
        }
        this.synth.onvoiceschanged = () => {
          voices = this.synth.getVoices();
          resolve(voices);
        };
      });
    },
    speak() {
      if (this.text && this.language) {
        if (this.synth.speaking) {
          return;
        } else {
          let speech = new SpeechSynthesisUtterance(this.text);
          speech.rate = this.rate;
          speech.pitch = this.pitch;
          speech.volume = this.volume;
          speech.lang = this.language;
          this.synth.speak(speech);
        }
      }
    }
  },
  async mounted() {
    this.synthVoices = await this.getVoices();
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
  transform: translate(-50%, -50%);
}

header {
  text-align: center;
  margin-bottom: 2rem;
}

.input-component {
  padding-bottom: 1.5rem;
}

.submit-component {
  margin: 1rem 0;
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
