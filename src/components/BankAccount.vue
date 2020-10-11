<template>
	<section class="account">
		<header>
			<h3 v-text="accountInfo.accountName">Account name</h3>
			<label
				>Account name
				<input type="text" v-model="accountInfo.accountName"
			/></label>
		</header>
		<label>
			Account types:
			<select v-model="accountInfo.accountType">
				<option selected value="basic">basic</option>
				<option value="regularSaver">Regular Saver</option>
				<option value="capped">Capped</option>
			</select>
		</label>

		<fieldset v-if="accountInfo.accountType !== 'basic'">
			<legend>Balance constraints</legend>
			<label
				>Min balance:
				<input
					type="number"
					name="min"
					v-model.number="accountInfo.balance.min"
				/>
			</label>

			<label
				>Max balance:
				<input
					type="number"
					name="max"
					v-model.number="accountInfo.balance.max"
				/>
			</label>

			<label
				>Monthly payment limit:
				<input
					type="number"
					name="paymentLimit"
					v-model.number="accountInfo.balance.paymentLimit"
				/>
			</label>
		</fieldset>

		<fieldset>
			<legend>Interest payments</legend>
			<label
				>Interest rate:
				<input
					type="number"
					name="interestRate"
					v-model.number="accountInfo.interest.rate"
				/>
			</label>
			<label>
				Calculated daily, paid
				<select v-model="accountInfo.interest.paymentFrequency">
					<option value="monthly">Monthly</option>
					<option value="annually">Annually</option>
				</select>
			</label>
		</fieldset>
		<button
			class="button save"
			@click="$store.commit('accounts/update', accountInfo)"
		>
			Save
		</button>

		<button
			class="button delete"
			@click="$store.commit('accounts/delete', accountInfo.id)"
		>
			Delete
		</button>
	</section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BankAccount extends Vue {
	@Prop() private accountInfo!: Object;
	public data() {
		return {
			accountName: "",
			accountType: "",
			balance: {
				min: 0,
				max: 0,
				paymentLimit: 0,
			},
			interest: {
				rate: 0,
				paymentFrequency: "",
			},
		};
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.account {
	margin: 1rem;
	border: 1px solid #f00;
}
fieldset {
	margin: 1rem;
}
label {
	display: block;
}
.button {
	height: fit-content;
	padding: 1rem 2rem;
}
.delete {

}
</style>
