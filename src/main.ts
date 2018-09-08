import Vue, { CreateElement, VNode } from 'vue';
import App from './App.vue';
import './plugins/vuetify';
import store from './store';

Vue.config.productionTip = false;

new Vue({
	store,
	render: (h: CreateElement): VNode => h(App)
}).$mount('#app');
