import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:4000';

new Vue({
  render: (h) => h(App),
}).$mount('#app');
