<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<AccountCollection />
	</div>
</template>

<script>
// @ is an alias to /src
import AccountCollection from '@/components/AccountCollection.vue';
import BankAccount from '@/components/BankAccount.vue';

export default {
	name: 'Home',
	components: {
		BankAccount,
		AccountCollection,
	},
};
</script>
