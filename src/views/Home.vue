<template>
	<div class="home">
		<header>
			<h1>On Balance</h1>
			<p>A calculator to compare combinations of interest</p>
		</header>
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
