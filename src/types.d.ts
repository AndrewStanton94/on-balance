export interface Account {
	id: string;
	accountName: string;
	accountType: string;
	balance: {
		min: number;
		max: number;
		paymentLimit: number;
	};
	interest: {
		rate: number;
		paymentFrequency: 'monthly';
	};
}
export interface AccountsState {
	accounts: Array<{
		id: string;
		data: Account;
	}>;
}