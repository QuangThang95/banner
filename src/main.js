import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import cookieconsent from 'cookieconsent'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

Vue.config.productionTip = false

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.component('cookie-consent', cookieconsent)
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
