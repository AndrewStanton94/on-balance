import { v4 as uuidv4 } from 'uuid';

const getIndexFromId = (array, targetId) =>
	array.findIndex(({id}) => id === targetId)
;

export default {
	namespaced: true,
	state: {
		accounts: [],
	},
	mutations: {
		create(state) {
			const id = uuidv4();
			state.accounts.push({
				id,
				data: {
					id,
					accountName: 'New account',
					accountType: 'basic',
					balance: {
						min: 0,
						max: 0,
						paymentLimit: 0,
					},
					interest: {
						rate: 0,
						paymentFrequency: 'monthly',
					},
				},
			});
		},
		update(state, data) {
			const index = getIndexFromId(state.accounts, data.id);
			state.accounts[index] = {
				id: data.id,
				data,
			};
		},
		delete(state, id) {
			const index = getIndexFromId(state.accounts, id);
			state.accounts.splice(index, 1);
		},
	},
};
