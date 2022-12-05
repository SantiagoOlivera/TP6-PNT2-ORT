import Vue from 'vue'
import App from './App.vue';
import store from './store';
import './globalMixins';

Vue.config.productionTip = false


new Vue({
  store: store,
  //mixins: [globalMixins],
  render: h => h(App),
}).$mount('#app')
