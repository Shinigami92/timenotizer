import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		timeEntries: [
			{
				id: '401e7428-0b07-4307-a79e-5f79a42451c3',
				started: new Date(),
				category: 'AAA',
				subject: 'Test Entry',
				done: false
			},
			{
				id: '401e7428-0b07-4307-a79e-5f79a42451c4',
				started: new Date(new Date().getTime() - 1000 * 60 * 60 * 1.4),
				stopped: new Date(),
				category: 'BBB',
				subject: 'Test Entry2',
				duration: 1.4,
				done: true
			}
		]
	},
	mutations: {},
	actions: {}
});
