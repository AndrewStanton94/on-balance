import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import accounts from './accounts';

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		accounts,
	},
});
