import Vue from 'vue'
import App from './App.vue'
import Bitcoin from './Bitcoin.js';

window.Bitcoin = Bitcoin;

new Vue({
  el: '#app',
  render: h => h(App)
});
