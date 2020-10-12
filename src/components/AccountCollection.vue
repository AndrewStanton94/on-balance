<template>
	<div>
		<header>
			<h2>Your accounts</h2>
		</header>
		<section class="accounts">
			<BankAccount
				v-for="account in accounts"
				v-bind:key="account.id"
				v-bind:accountInfo="account.data"
			/>
			<button
				class="addAccount"
				@click="$store.commit('accounts/create')"
			>
				Add an account
			</button>
		</section>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BankAccount from '@/components/BankAccount.vue';

@Component({
	components: { BankAccount },
})
export default class AccountCollection extends Vue {
	public get accounts(): Array<Object> {
		return this.$store.state.accounts.accounts;
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.accounts {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
}
.addAccount {
	height: fit-content;
	padding: 1rem 2rem;
}
</style>
