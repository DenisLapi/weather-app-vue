import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Search from './components/Search.vue'
import Result from './components/Result.vue'


Vue.use(VueResource);

Vue.component("search-city", Search);
Vue.component("search-result", Result);

new Vue({
  el: '#app',
  render: h => h(App)
})
