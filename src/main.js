import Vue from 'vue'
import App from './App.vue'

// import "materialize-css/dist/css/materialize.min.css"
// import "materialize-css/css/materialize.css"
import "materialize-css/sass/materialize.scss"

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')