<template>
<section class="accounts">
	<BankAccount v-for="account in accounts" v-bind:key="account" />
	<button @click="accounts.push('next')"></button>
</section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BankAccount from '@/components/BankAccount.vue';

@Component({
	components: { BankAccount},
})
export default class AccountCollection extends Vue {
	public data() {
		return {
			accounts: ['u', 'v', 'x', 'y', 'z'],
		};
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.accounts {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
</style>
